import { FieldValue, FieldValues, useForm } from "react-hook-form"
import RenderFields from "../components/form/renderFields"


interface IOneVsOne {

}

interface IFormSchema {
    [key: string]: { type: string, label : string, options?: FieldValues, control: FieldValues }
}

const OneVsOne: React.FC<IOneVsOne> = () => {

    const { handleSubmit, control } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            gender: { value: 'chocolate', label: 'Chocolate' }
        }
    })

    const options = {
        gender: [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ]
    }




    const formSchema: IFormSchema = {
        firstName: {
            type: "text",
            label: "Enter Your First Name",
            control: control,
        },
        lastName: {
            type: "text",
            label: "Enter Your LastName",
            control: control
        },
        email: {
            type: "email",
            label: "Enter Your Email",
            control: control
        },
        password: {
            type: "password",
            label: "Enter Your Password",
            control: control
        },
        gender: {
            type: "list",
            label: "select Your Gender",
            options: options.gender,
            control: control
        }
    }

    const onSubmit = (data: any) => {
        console.log(data);
    };


    return (
        <div className="container mx-auto">
            <div className="w-96 mx-auto mt-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <RenderFields formSchema={formSchema} />
                </form>
            </div>
        </div>
    )
}

export default OneVsOne




