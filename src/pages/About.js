import { useState, useEffect } from "react"


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
        <div>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
    )
    return about ? loaded() : <h1>LOADING....</h1>
}