import { Control, Controller, FieldValues, RegisterOptions } from "react-hook-form"
import RadioCard from "./radioCard"
import { useState } from "react"

interface SingleQuizInterface {
    control: Control<any>
    qustion: string
    name: string
    rules?: Omit<RegisterOptions<FieldValues, string>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">
    options: string[]
    correctAnswer?: boolean
    index: number
    setQustion: React.Dispatch<React.SetStateAction<number>>
}

const SingleQuiz: React.FC<SingleQuizInterface> = ({ control, qustion, name, options, correctAnswer, rules, index, setQustion }) => {

    const [startAnimation, setStartAnimation] = useState(false)

    function nextQustion() {
        setStartAnimation(true)
        setTimeout(() => {
            setQustion(preveQustionNumber => {
                setStartAnimation(false)
                return preveQustionNumber + 1
            })
        }, 400)
    }

    return (
        <div className={`p-5 h-[100vh] flex flex-col justify-center items-center text-xl transition-all  ${startAnimation && 'opacity-0'}`}>
            <div className="w-2/5">
                <h3 className="mb-5 font-bold" dangerouslySetInnerHTML={{ __html: `${index + 1}_${qustion}` }}></h3>
                <Controller
                    name={name}
                    control={control}
                    rules={rules}
                    render={({ field }) => (
                        <div {...field}>
                            {options?.map((item: string, index) => <RadioCard title={item} name={name} index={index as number} />)}
                        </div>
                    )}
                />
                <div className="text-right">
                    <button type="submit" onClick={nextQustion} className="px-5 py-2 bg-gray-200 transition-all rounded-md hover:shadow-md mr-3 text-indigo-400 text-sm font-bold">Next</button>
                </div>
            </div>
        </div>
    )
}

export default SingleQuiz