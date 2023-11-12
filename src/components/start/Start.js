import styled from "styled-components"
import { DEFAULT_BLACK } from "../../constant/Colors"
import Background from "../background/Background"
import Button from "../button/Button"
import { useNavigate } from "react-router-dom"

const Wrapper = styled.div`
    width: 100%;
    margin-bottom: 70px;
`

const MainIcon = styled.img`
    margin-bottom: 20px;
    transform: translateX(-7%);
    width: 100px;
`

const TitleWrap = styled.div`
    width: 100%;
    margin-bottom: 100px;
`

const TitleText = styled.p`
    font-size: 40px;
    margin: 0px;
    margin-bottom: 10px;
    font-weight: 700;
    color: ${DEFAULT_BLACK};
`

export default () => {

    const navigate = useNavigate();

    const buttonAction = () => {
        navigate("/onboarding/gender")
    }

    return(
        <Wrapper>
            <MainIcon src="/img/main-icon.png" />
            <TitleWrap>
                <TitleText>당신의 하루를</TitleText>
                <TitleText>그려보세요.</TitleText>
            </TitleWrap>
            <Button text="시작하기." action={buttonAction}>asdasdasd</Button>
        </Wrapper>
    )
}