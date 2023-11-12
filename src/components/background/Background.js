import { Outlet } from "react-router-dom"
import styled from "styled-components"
import background from "./background.png"

const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    max-width: 390px;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    background-size: cover;
    background-image: url(${background});
`

const AppPadding = styled.div`
    box-sizing: border-box;
    width: 80%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`

export default () => {

    return (
        <BackgroundImage>
            <AppPadding>
                <Outlet />
            </AppPadding>
        </ BackgroundImage>
    )
}