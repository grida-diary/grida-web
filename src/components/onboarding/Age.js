import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { styled } from "styled-components"
import { DEEP_NAVY, DEFAULT_BLACK } from "../../constant/Colors"
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

const AgeInput = styled.input`
    margin-bottom: 70px;
    height: 55px;
    border: 1px solid lightgray;
    border-radius: 10px;
    outline: none;
    padding: 0px 20px;
    font-size: 20px;
    transition: .2s;
    color: ${DEFAULT_BLACK};

    &:focus,
    &:valid {
        border: 2px solid ${DEEP_NAVY} !important;
    }
`

export default () => {

    const navigate = useNavigate()

    const [age, setAge] = useState(null);

    useEffect(() => {
        if (window.sessionStorage.getItem("gender") == null) {
            navigate("/")
        }
    }, [])

    const buttonAction = () => {
        window.sessionStorage.setItem("age", age)
        navigate("/write")
    }

    const handleChange = (e) => {
        setAge(e.target.value)
    }

    return(
        <>
        <ProgressBar width="66%" />
        <Wrapper>
            <TitleWrap>
                <TitleText>당신은</TitleText>
                <TitleText>몇살입니까?</TitleText>
            </TitleWrap>
            <AgeInput placeholder="나이를 입력해 주세요." onChange={handleChange} type="number" inputmode="numeric" required/>
            <Button action={buttonAction} text="다음" />
        </Wrapper>
        </>
    )
}