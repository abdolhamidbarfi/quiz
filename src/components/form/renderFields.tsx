import Input from "./fields/input";
import Select from "./fields/select";
import { FormSchemaType } from "../../contracts/formContracts";


interface IRenderFields {
    formSchema: FormSchemaType
    submitTxt: string
    loading?: boolean | null
}

const RenderFields: React.FC<IRenderFields> = ({ formSchema, submitTxt, loading }) => {

    const arrayField = []

    for (const [key, value] of Object.entries(formSchema)) {
        ["text", "password", "email", "number"].includes(value.type) && arrayField.push(<Input key={key} id={key} {...value} />)
        value.type === "list" && arrayField.push(<Select key={key} id={key}  {...value} />)
    }

    return (
        <>
            {arrayField.map(item => item)}
            <div className="bg-indigo-600 text-white font-bold w-full p-2 my-5 rounded-md cursor-pointer flex justify-center items-center gap-2">
                <input type="submit" value={submitTxt} className="cursor-pointer" />
                {
                    loading &&
                    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    ></span>
                }
            </div>

        </>
    )

}

export default RenderFields

