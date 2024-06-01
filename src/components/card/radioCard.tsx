
interface RadioCardInterface {
    title: string
    name?: string | number
    index: number
}


const RadioCard: React.FC<RadioCardInterface> = ({ title, name, index }) => {
    return (
        <div className="flex items-center ">
            <label className="relative flex gap-2 items-center p-2 rounded-full cursor-pointer" htmlFor={`${index}${name}`}>
                <input name={name as string} type="radio"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-indigo-500 checked:before:bg-indigo-500 hover:before:opacity-10"
                    id={`${index}${name}`} value={title}/>
                <span className="absolute text-indigo-100 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                        <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                </span>
            </label>
            <label className="cursor-pointer" htmlFor={`${index}${name}`} dangerouslySetInnerHTML={{__html: title}}></label>
        </div>
    )
}

export default RadioCard