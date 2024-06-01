import MultipleQuiz from "../card/multipleQuiz";
import { Control } from "react-hook-form";
import SingleQuiz from "../card/singleQuiz";
import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";


interface IRenderQuiz {
    data: { quizData: {}[], correctAnswers: string[] }
    submitTxt?: string 
    loading?: boolean 
    control?: Control<any> 
    answers?: any
}

const RenderQuiz: React.FC<IRenderQuiz> = ({ data, submitTxt, loading, control, answers }) => {
    const { quizData, correctAnswers } = data
    const [questionNumber, setQuestionNumber] = useState(0)
    const navigate = useNavigate()
    const checkEndQustion = questionNumber < quizData.length

    return (
        <>
            {
                checkEndQustion && <>
                    {
                        quizData.map((item, index) => {
                            if (questionNumber === index) {
                                return (
                                    <SingleQuiz
                                        setQustion={setQuestionNumber}
                                        control={control}
                                        index={index}
                                        qustion={item.question}
                                        name={"qustion" + index}
                                        options={item.answers}
                                        correctAnswer={
                                            answers["qustion" + index] === undefined
                                                ? undefined
                                                : answers["qustion" + index] === correctAnswers[index] ? true : false
                                        }
                                    />
                                )
                            }
                        })
                    }
                </>
            }

            {
                !checkEndQustion && <>
                    <div className="flex flex-col items-center gap-12 h-[100vh] justify-center transition-all delay-75">
                        <span className="font-bold text-xl">
                            Congratulations, you have answered all the questions, click on Check Answers button to see the result
                        </span>
                        <span className="bg-gray-200 text-indigo-400 w-1/6 font-bold p-2 rounded-md cursor-pointer text-center">

                            <input type="submit" value={submitTxt} className="cursor-pointer" onClick={() => navigate("/1-play/end")} />
                            {
                                loading &&
                                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                ></span>
                            }
                        </span>
                    </div>
                </>
            }


        </>
    )

}

export default RenderQuiz

