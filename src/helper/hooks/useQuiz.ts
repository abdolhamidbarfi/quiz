import { useAppSelecor } from "../../store";


export function useQuiz() {
    const { answers, data, error, loading, success } = useAppSelecor(state => state.quiz)

    const endQuiz = Object.entries(answers).length === data.quizData.length
    const quizResult = handleQuizResult(data.correctAnswers , answers)

    return {
        userAnswers: answers,
        data,
        error,
        loading,
        success,
        endQuiz,
        quizResult
    }
    
}

const handleQuizResult = (correctAnswers: string[], userAnswers : {}) => {

    const corrects = correctAnswers.map((answer: string, index: number) => {
        
        // if (answer === userAnswers["qz00" + (index + 1)]) {
        //     return { [index]: answer }
        // }
    }).filter(answer => answer !== undefined)

    return {corrects}
}


