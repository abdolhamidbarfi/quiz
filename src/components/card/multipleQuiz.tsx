import { Control, Controller, FieldValues, RegisterOptions } from "react-hook-form"
import RadioCard from "./radioCard"

interface MultipleQuizInterface {
    control: Control<any>
    qustion: string
    name: string
    rules?: Omit<RegisterOptions<FieldValues, string>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">
    options: string[]
    correctAnswer?: boolean
}


const MultipleQuiz: React.FC<MultipleQuizInterface> = ({ name, qustion, control, rules, options, correctAnswer}) => {

    return (

        <div className={`mt-2 rounded-md shadow-sm m-2 p-2 bg-indigo-50 ${correctAnswer === true ? "!bg-green-400" : correctAnswer === false ? "!bg-red-400" : ""}`}>
            <label
                htmlFor={name}
                className="block text-md font-bold leading-6 text-gray-900"
                dangerouslySetInnerHTML={{ __html: qustion }}>
            </label>
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
        </div>
    )
}

export default MultipleQuiz