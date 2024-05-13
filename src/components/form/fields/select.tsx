import { Control, Controller, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'
import Selecter from 'react-select'
import { InputType } from '../../../contracts/formContracts'

export interface SelectInterface extends InputType{
    options?: { value: string, label: string }[]
}

const Select: React.FC<SelectInterface> = ({ label , id, options, control, rules , ...regs }) => {
    return (
        <div className="relative mt-2 rounded-md shadow-sm">
            <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
            <Controller
                name={id}
                control={control}
                rules={rules}
                render={({ field }) => {
                    return (
                        <Selecter
                            {...field}
                            {...regs}
                            options={options}
                            theme={
                                (theme) => ({
                                    ...theme,
                                    borderRadius: 5,
                                    colors: {
                                        ...theme.colors,
                                        primary25: '#4f46e5',
                                        primary: "#4f46e5",
                                    },
                                })
                            }
                        />
                    )
                }
                }
            />
        </div>
    )
}

export default Select