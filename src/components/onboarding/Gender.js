import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { styled } from "styled-components"
import { DEEP_NAVY, DEFAULT_BLACK, LIGHT_NAVY } from "../../constant/Colors"
import Button from "../button/Button"
import ProgressBar from "../progressbar/ProgressBar"

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

const GenderWrap = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
`

const GenderElement = styled.button`
    width: 150px;
    height: 150px;
    background-color: #ffffff;
    font-size: 24px;
    color: ${DEFAULT_BLACK};
    outline: none;
    border: ${(props) => props.border} solid ${(props) => props.color};
    border-radius: 10px;
    box-sizing: border-box;
    transition: .1s;
`

export default () => {

    const navigate = useNavigate();

    const [gender, setGender] = useState(null);
    const [style, setStyle] = useState({
        manBorder : "1px",
        manColor : "lightgray",
        womanBorder : "1px",
        womanColor : "lightgray",
    })

    useEffect(() => {
        window.sessionStorage.clear()
    })

    const handleChange = (e) => {
        setGender(e.target.name);

        if (e.target.name == "man") {
            setStyle({
                manBorder : "2px",
                manColor : "#122266",
                womanBorder : "1px",
                womanColor : "lightgray",
            })
        }

        if (e.target.name == "woman") {
            setStyle({
                manBorder : "1px",
                manColor : "lightgray",
                womanBorder : "2px",
                womanColor : "#122266",
            })
        }
    }

    const buttonAction = () => {
        if (gender) {
            window.sessionStorage.setItem("gender", gender)
            navigate("/onboarding/age")
        }
    }

    return (
        <>
        <ProgressBar width="33%" />
        <Wrapper>
            <TitleWrap>
                <TitleText>당신의 성별은</TitleText>
                <TitleText>무엇입니까?</TitleText>
            </TitleWrap>
            <GenderWrap>
                <GenderElement onClick={handleChange} name="man" border={style.manBorder} color = {style.manColor}>남성</GenderElement>
                <GenderElement onClick={handleChange} name="woman" border={style.womanBorder} color = {style.womanColor}>여성</GenderElement>
            </GenderWrap>
            <Button action={buttonAction} text="다음"></Button>
        </Wrapper>
        </>
    )
}