import { styled } from "styled-components"
import { DEFAULT_BLACK } from "../../constant/Colors"
import Button from "../button/Button"
import ProgressBar from "../progressbar/ProgressBar"
import { DEEP_NAVY } from "../../constant/Colors"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Loading from "../loading/Loading"


const Wrapper = styled.div`
    width: 100%;
    height: 650px;
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const TitleWrap = styled.div`
    width: 100%;
    margin-bottom: 40px;
`

const TitleText = styled.p`
    font-size: 32px;
    margin: 0px;
    margin-bottom: 10px;
    font-weight: 700;
    color: ${DEFAULT_BLACK};
`

const DiaryInput = styled.textarea`
    height: 250px;
    outline: none;
    border: 1px solid lightgray;
    border-radius: 10px;
    resize: none;
    margin-bottom: 70px;
    padding: 20px;
    box-sizing: border-box;
    color: ${DEFAULT_BLACK};
    font-size: 20px;

    &:focus,
    &:valid {
        border: 2px solid ${DEEP_NAVY} !important;
    }
`

export default () => {

    const navigate = useNavigate()

    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (window.sessionStorage.getItem("gender") == null || window.sessionStorage.getItem("age") == null) {
            navigate("/")
        }
    }, [])

    const handleChange = (e) => {
        setContent(e.target.value)
    }

    const buttonAction = (e) => {

        e.preventDefault();

        const data = {
            gender : window.sessionStorage.getItem("gender"),
            age : window.sessionStorage.getItem("age"),
            content : content
        }


        setLoading(true);
        axios.post("https://grida-web-server.taewan.co.kr/api/diary", data)
        .then((res) => {
            console.log(res)
            setLoading(false)
            window.sessionStorage.setItem("content", res.data.data.content)
            window.sessionStorage.setItem("imageUrl", res.data.data.imageUrl)
            navigate("/check")
        })
        .catch(() => {
            alert("오류가 발생 했습니다. 다시 작성해 주세요.")
            setContent("")
            setLoading(false)
        })
    }

    return (
        <>
        {
            loading ?
            <Loading /> :
            contents(content, handleChange, buttonAction)
        }
        </>
    )
}

const contents = (content, handleChange, buttonAction) => {
    return (
        <>
        <ProgressBar width="100%" />
        <Wrapper>
            <TitleWrap>
                <TitleText>오늘의 하루를</TitleText>
                <TitleText>알려주세요.</TitleText>
            </TitleWrap>
            <DiaryInput value={content} onChange={handleChange} placeholder="일기를 작성해 주세요." required/>
            <Button action={buttonAction} text="그림 그리기" />
        </Wrapper>
        </>
    )
}