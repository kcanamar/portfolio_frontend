import { useState, useEffect } from "react"
import Image from "../components/styled-components/Image.js"
import { Container } from "@mui/material"

export default function About({ URL }) {
    const [about, setAbout] = useState(null)
    
    useEffect(() => {
        const getAboutData = async () => {
        const response = await fetch(URL + "about")
        const data = await response.json()
        setAbout(data)
        }
        getAboutData()
    }, [URL])

    const loaded = () => (
        <Container>
            <Image src={about.headshot} alt={about.name}/>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </Container>
    )
    return about ? loaded() : <h1>LOADING....</h1>
}