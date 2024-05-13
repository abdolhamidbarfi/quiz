import { Link, Outlet } from "react-router-dom"
import SimpleCard from "../components/card/simpleCard"

interface IRoot {

}
const Root: React.FC<IRoot> = () => {

    const dataTable = [
        { title: "1 Play", link: "/1-play"},
        { title: "1 Vs 1", link: "/one-vs-one"},
    ]

    return (
        <>
            <div className="container mx-auto">
                <div className="flex justify-center items-center">
                    {dataTable.map(card => <SimpleCard {...card} />)}
                </div>
            </div>
        </>
    )
}

export default Root