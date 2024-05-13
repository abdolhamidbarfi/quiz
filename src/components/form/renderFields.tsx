import Input from "./fields/input";
import Select from "./fields/select";
import { FormSchemaType } from "../../contracts/formContracts";


interface IRenderFields {
    formSchema: FormSchemaType
    submitTxt : string
}

const RenderFields: React.FC<IRenderFields> = ({ formSchema , submitTxt}) => {

    const arrayField = []

    for (const [key, value] of Object.entries(formSchema)) {
        ["text", "password", "email" , "number"].includes(value.type) && arrayField.push(<Input key={key} id={key} {...value} />)
        value.type === "list" && arrayField.push(<Select key={key} id={key}  {...value} />)
    }

    return (
        <>
            {arrayField.map(item => item)}
            <input type="submit" value={submitTxt} className="bg-indigo-600 text-white font-bold w-full p-2 my-5 rounded-md cursor-pointer" />
        </>
    )

}

export default RenderFields

