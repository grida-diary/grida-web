import styled from "styled-components"
import { DEFAULT_WHITE, LIGHT_NAVY } from "../../constant/Colors"

const Wrapper = styled.button`
    width: 100%;
    height: 55px;
    background-color: ${LIGHT_NAVY};
    border-radius: 10px;
    color: ${DEFAULT_WHITE};
    outline: none;
    border: none;
    font-weight: 700;
    font-size: 24px;
    box-shadow: 2px 4px 8px rgba(1, 1, 1, 0.3);
    transition: .2s;

    &:hover {
        transform: translateY(-3%);
    }
`

export default (props) => {
    
    return (
        <Wrapper onClick={props.action}>
            {props.text}
        </Wrapper>
    )
}