import { Controller } from "react-hook-form"
import { InputType } from "../../../contracts/formContracts"

interface SelectInterface extends InputType {

}


const Input: React.FC<SelectInterface> = ({ label, id, type = "text", control, rules, ...regs }) => {

    return (
        <div className="relative mt-2 rounded-md shadow-sm">
            <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
            <Controller
                name={id}
                control={control}
                rules={rules}
                render={({ field }) => <input
                    {...field}
                    type={type}
                    id={id}
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                    {...regs}
                />}
            />
        </div>
    )
}

export default Input