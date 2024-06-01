import { useState } from "react"
import { useAppSelecor } from "../../store"
import RenderQuiz from "../../components/form/renderQuiz"
import ReviewQuiz from "../../components/form/reviewQuiz"


interface EndOnePlayerInterface {


}
const EndOnePlayer: React.FC<EndOnePlayerInterface> = () => {

    const { answers, data } = useAppSelecor(state => state.quiz)
    const [reviewAnswers, setReviewAnswers] = useState(false)
    const numberOfCurrects = data.correctAnswers.filter((answer: any, index) => answers["qustion" + index] === answer).length
    const numberOfWrongs  = data.quizData.length - numberOfCurrects
    const pathQuiz = numberOfCurrects > numberOfWrongs 

    if (!reviewAnswers) {
        return (
            <div className={`${pathQuiz ? "bg-green-400" : "bg-red-400"} w-full h-[100vh] flex flex-col items-center justify-center font-bold text-xl`}>
                {
                    pathQuiz
                        ? <h2 className="text-white">{`Congratulations, you answered ${numberOfCurrects} out of ${data.quizData.length} questions correctly, you passed the quiz :)`}</h2>
                        : <h2 className="text-white">{`Unfortunately, you gave wrong answers to ${numberOfWrongs} out of ${data.quizData.length} questions and could not pass the quiz :(`}</h2>
                }

                <button onClick={() => setReviewAnswers(true)} className={`text-sm px-5 py-2 bg-white   rounded-md my-8 shadow-md ${pathQuiz ? "text-green-400" : "text-red-400"}`} >Review Answers</button>
            </div>
        )
    } else if (reviewAnswers) {
        return (
            <ReviewQuiz
                data={data}
                answers={answers}
            />
        )
    }
}

export default EndOnePlayer