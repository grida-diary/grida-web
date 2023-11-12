import { styled } from "styled-components"
import { LIGHT_NAVY } from "../../constant/Colors"

const ProgressBar = styled.div`
    width: 100%;
    height: 3px;
    background-color: lightgray;
    display: flex;
    flex-direction: start;
    border-radius: 2px;
`

const CompleteBar = styled.div`
    background-color: ${LIGHT_NAVY};
    width: ${(props) => props.width};
    height: 100%;
    border-radius: 2px;
`

export default (props) => {
    return (
        <ProgressBar>
            <CompleteBar width={props.width} />
        </ProgressBar>
    )
}