import { Link } from "react-router-dom"

interface ISimpleCard {
    title: string
    link: string
    linkOptions?: {}
    className?: string
}

const SimpleCard: React.FC<ISimpleCard> = ({title , link , linkOptions, className}) => {

    return (
        <Link to={link} {...linkOptions} >
        <div className={` border-indigo-700 border-[1px] rounded-md p-2 m-1 bg-white h-[15rem] w-[15rem] hover:shadow-md md:shadow-indigo-500 duration-75 flex justify-center items-center cursor-pointer ${className}`}>
           <span className="text-xl text-indigo-700">{title}</span>
        </div>

        </Link>
    )
}

export default SimpleCard