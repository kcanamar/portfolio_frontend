import styled from "styled-components"

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
        </div>
    )
}