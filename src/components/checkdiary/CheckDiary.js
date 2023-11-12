import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import ReactFlipCard from "reactjs-flip-card"
import { styled } from "styled-components"
import { DEFAULT_BLACK } from "../../constant/Colors"
import Button from "../button/Button"
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
    margin-bottom: 30px;
`

const TitleText = styled.p`
    font-size: 32px;
    margin: 0px;
    margin-bottom: 10px;
    font-weight: 700;
    color: ${DEFAULT_BLACK};
`

const ImageFiled = styled.img`
    position: relative;
    background-color: white;
    width: 100%;
    border-radius: 10px;
    box-shadow: 2px 4px 12px rgba(1, 1, 1, 0.03);
`

const DiaryFiled = styled.div`
    position: relative;
    background-color: white;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    box-shadow: 2px 4px 12px rgba(1, 1, 1, 0.03);
    padding: 20px;
    box-sizing: border-box;
    color: ${DEFAULT_BLACK};
    font-size: 20px;
`

const FilpDescription = styled.div`
    width: 100%;
    font-size: 14px;
    margin-top: 15px;
    display: flex;
    justify-content: end;
    padding-left: -5px;
    color: ${DEFAULT_BLACK};
    margin-bottom: 50px;
`



export default () => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        content : "",
        imageUrl : ""
    })

    useEffect(() => {
        setData({
            content : window.sessionStorage.getItem("content"),
            imageUrl : window.sessionStorage.getItem("imageUrl")
        })
    }, [])

    const buttonAction = () => {
        navigate("/")
    }

    return (
        <Wrapper>
            {contents(buttonAction, data.content, data.imageUrl)}
        </Wrapper>
    )
}

const contents = (buttonAction, content, imageUrl) => {

    const containerStyle = {
        width: "312px",
        height: "312px"
    }

    const elementStyle = {
        background: 'white',
        borderRadius: 10
    }

    return (
        <>
        <TitleWrap>
            <TitleText>당신을 위한</TitleText>
            <TitleText>오늘의 그림입니다.</TitleText>
        </TitleWrap>
        <ReactFlipCard
            containerStyle={containerStyle}
            frontStyle={elementStyle}
            backStyle={elementStyle}
            frontComponent={<ImageFiled src={imageUrl} />} 
            backComponent={<DiaryFiled>{content}</DiaryFiled>}
            flipTrigger="onClick"
        />
        <FilpDescription>터치해서 뒤집기 ></FilpDescription>
        <Button action={buttonAction} text="홈으로" />
        </>
    )
}