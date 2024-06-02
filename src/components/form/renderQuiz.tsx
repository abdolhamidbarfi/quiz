import { Control } from "react-hook-form";
import SingleQuiz from "../card/singleQuiz";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../helper/hooks/useQuiz";


interface IRenderQuiz {
    submitTxt?: string
    control?: Control<any>
    review?: boolean
}

const RenderQuiz: React.FC<IRenderQuiz> = ({ submitTxt, control, review = false }) => {

    const [questionNumber, setQuestionNumber] = useState(0)
    const navigate = useNavigate()
    const {
        endQuiz,
        data: { quizData },
        loading
    } = useQuiz()


    if (!endQuiz || review) {
        return (
            quizData.map((item, index) => {
                if (questionNumber === index) {
                    return (
                        <SingleQuiz
                            title={item.question}
                            setQustion={setQuestionNumber}
                            control={control ? control : undefined}
                            questionNumber={index + 1}
                            options={item.answers}
                        />
                    )
                }
            })
        )
    } else if (endQuiz && !review)
        return (
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
        )

}

export default RenderQuiz

