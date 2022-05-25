import { Link } from "react-router-dom"

export default function Header(props) {
    const navStyle = {
        display:"flex",
        justifyContent:"space-around",
        border: "3px solid black",
        borderRadius: "5px",
        padding:"8px",
        width: "90%",
        margin: "40px",
    }

    return (
        <header>
            <h1>My Portfolio Page</h1>
            <nav style={navStyle}>
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/projects">PROJECTS</Link>
            </nav>
        </header>
    )
}