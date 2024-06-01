import RenderQuiz from "../../components/form/renderQuiz"
import { useAppDispatch, useAppSelecor } from "../../store"
import { useForm } from "react-hook-form"
import { setAnswers } from "../../store/Slices/quizSlice"
import EndOnePlayer from "./endOnePlayer"
import { useState } from "react"

interface StartOnePlayerInterface {

}


const StartOnePlayer: React.FC<StartOnePlayerInterface> = () => {

    const { handleSubmit, control } = useForm()
    const dispatch = useAppDispatch()
    const { data, answers } = useAppSelecor((state) => state.quiz)

    const onSubmit = (data: any) => {
        dispatch(setAnswers(data))
    }



    return (
        <div className="bg-indigo-400 text-gray-100 h-[100vh]">
            <form className="container mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <RenderQuiz
                    data={data}
                    submitTxt="Check Answers"
                    control={control}
                    answers={answers}

                />
            </form>
        </div>
    )
}

export default StartOnePlayer