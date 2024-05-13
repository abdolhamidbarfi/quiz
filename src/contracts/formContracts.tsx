import { Control, FieldValues, RegisterOptions } from "react-hook-form"

export type InputType = {
    id: string
    type: "list" | "email" | "password" | "text" | "number"
    label: string
    placeholder?: string
    control?: Control<any>
    rules?: Omit<RegisterOptions<FieldValues, string>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">
}

export interface SelectInterface extends InputType {
    options?: {
        value: string
        label: string
    }[]
}

interface FormSchemaInterface extends Omit<InputType, 'id'>, Omit<SelectInterface, 'id'> {

}

export type FormSchemaType = {
    [key: string]: FormSchemaInterface
}