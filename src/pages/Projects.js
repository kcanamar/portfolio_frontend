import { useState, useEffect } from "react"

export default function Projects({ URL }) {
    const [projects, setProjects] = useState(null)
    
    useEffect(() => {
        const getProjectsData = async () => {
        const response = await fetch(URL + "projects")
        const data = await response.json()
        setProjects(data)
        }
        getProjectsData()
    }, [URL])

    const loaded = () => {
        return projects.map((project, idx) => (
                    <div key={idx}>
                        <h1>{project.name}</h1>
                        <img src={project.img} alt={project.name}/>
                        <a href={project.git}>
                            <button>GitHub</button>
                        </a>
                        <a href={project.live}>
                            <button>Live Site</button>
                        </a>
                    </div>
                ))
    }

    return projects ? loaded() : <h1>Loading...</h1>
}