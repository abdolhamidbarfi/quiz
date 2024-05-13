import { FieldValues, UseFormRegister } from "react-hook-form";
import Input, { IInput } from "./fields/input";
import Select, { ISelect } from "./fields/select";

interface FormSchema {
    [key: string]: { type: string, title: string }
}

interface IRenderFields {
    formSchema: FormSchema
}

const RenderFields: React.FC<IRenderFields> = ({ formSchema }) => {

    const arrayField = []

    for (const [key, value] of Object.entries(formSchema)) {
        ["text", "password", "email"].includes(value.type) && arrayField.push(<Input key={key} id={key} {...value} />)
        value.type === "list" && arrayField.push(<Select key={key} id={key}  {...value} />)
    }

    return (
        <>
            {arrayField.map(item => item)}
            <input type="submit" className="bg-indigo-600 text-white font-bold w-full p-2 my-5 rounded-md cursor-pointer" />
        </>
    )

}

export default RenderFields

