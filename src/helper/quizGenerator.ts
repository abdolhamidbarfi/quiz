
export const quizGenerator = (data: any) => {
    let quizData;

    quizData = data.map((item: any) => {
        let newItem = { ...item }
        delete newItem.incorrect_answers
        newItem.answers = shuffleArray([...item.incorrect_answers, item.correct_answer])
        return newItem
    })

    const correctAnswers = quizData.map((item: any) => item.correct_answer)

    return { quizData, correctAnswers }

}

function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
