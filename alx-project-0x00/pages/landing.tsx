import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
    return(
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />
            <div>
                 <Button title="View" styles="rounded-sm ml-4 mr-4 bg-blue-500 py-3 px-8"/>
                 <Button title="Buy" styles="rounded-md mr-4 bg-cyan-500 py-3 px-8"/>
                 <Button title="Update" styles="rounded-full mr-4 bg-pink-500 py-3 px-8"/>

                 <Button title="Sell" styles="rounded-lg mr-4 bg-yellow-500 py-3 px-8"/>
            </div>
            
        </div>
    )
}
export default Landing;