import { BeatLoader } from "react-spinners"
import styled from "styled-components"
import { DEFAULT_BLACK, LIGHT_NAVY } from "../../constant/Colors"

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
`

const Description = styled.p`
    font-size: 20px;
    margin-bottom: 50px;
    color: ${DEFAULT_BLACK}
`

export default () => {
    return (
        <Wrapper>
            <Description>그림을 생성중입니다.</Description>
            <BeatLoader color={LIGHT_NAVY} />
        </Wrapper>
    )
}