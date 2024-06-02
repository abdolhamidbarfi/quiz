import RenderQuiz from "../../components/form/renderQuiz"
import { useAppDispatch } from "../../store"
import { useForm } from "react-hook-form"
import { setAnswers } from "../../store/Slices/quizSlice"

interface StartOnePlayerInterface {

}


const StartOnePlayer: React.FC<StartOnePlayerInterface> = () => {

    const { handleSubmit, control } = useForm()
    const dispatch = useAppDispatch()

    const onSubmit = (data: any) => {
        dispatch(setAnswers(data))
    }
    

    return (
        <div className="bg-indigo-400 text-gray-100 h-[100vh]">
            <form className="container mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <RenderQuiz
                    submitTxt="Check Answers"
                    control={control}
                />
            </form>
        </div>
    )
}

export default StartOnePlayer