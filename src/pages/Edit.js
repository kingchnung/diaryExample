import { useNavigate, useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../component/Header";
import Button from "../component/Button";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import { useContext } from "react";
import Editor from "../component/Editor";

const Edit = () => {
    const { id } = useParams();
    const data = useDiary(id);
    const navigate = useNavigate();
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);

    const goBack = () => {
        navigate(-1);
    }

    const onClickDelete = () => {
        if(window.confirm("삭제 할래말래? 할래말래? 할래말래?\n복구 안되서 애매하긴해!")) {
            onDelete(id);
            navigate("/", {replace:true});
        }
    };

    if (!data) {
        return <div>일기 불러오는 중..</div>;
    } else {
        return (
            <div>
                <section>
                <Header title={"일기 수정하기"}
                leftChild={<Button text={"< 뒤로 가기"} onClick={goBack} />}
                rightChild={<Button type={"negative"} text={"삭제하기"} onClick={onClickDelete}/>}
                />
                </section>
                <section>
                    <Editor></Editor>
                </section>
            </div>
        )
    }
}

export default Edit;