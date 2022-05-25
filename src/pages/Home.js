import styled from "styled-components"
import { Button } from "@mui/material"
const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: blue;
`
const Wrapper = styled.section`
    padding: 4em;
    background: orange;
`
export default function Home(props) {
    return (
        <div className="bob">
            <Wrapper>
                <Title>Welcome to Kyle Canamar's Portfolio</Title>
            </Wrapper>
                <Button to={`https://github.com/kcanamar/portfolio_backend`}>Check Out the Backend Code Here</Button>
        </div>
    )
}