import { Control, FieldValues, RegisterOptions } from "react-hook-form"

export type InputType = {
    id: string
    type: string
    label : string
    placeholder?: string
    control?: Control<FieldValues>
    rules?: Omit<RegisterOptions<FieldValues, string>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">
}