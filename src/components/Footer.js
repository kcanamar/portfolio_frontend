import { Link } from "@mui/material"

export default function Footer(props) {
    const footStyle = {
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
            <nav style={footStyle}>
                <Link href={"https://www.linkedin.com/in/kyle-canamar"}>LinkedIn</Link>
                <Link href={"https://github.com/kcanamar"}>GitHub</Link>
                <Link>Blog</Link>
            </nav>
        </header>
    )
}