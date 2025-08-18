import { useSearchParams } from "react-router-dom";
import Button from "../component/Button";
import Header from "../component/Header";

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("sort"));


    return (
        <div>
            <Header title={"Home"} leftChild={
                <Button type="positive" text={"긍정 버튼"} onClick={() => {
                    alert("positive 버튼");
                }} />
            }

            rightChild={
                <Button type="negative" text={"부정 버튼"} onClick={() => {
                    alert("negative 버튼");
                }} />
            }
            />
        </div>
    )
}

export default Home;