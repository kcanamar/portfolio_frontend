import { useState, useEffect } from "react"
import { Paper, Link, Container, Grid, Typography } from "@mui/material"
import Image from "../components/styled-components/Image.js"

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
        return <Container maxWidth="lg">
                <Grid container spacing={5}>
                    {projects.map((project, idx) => (
                            <Grid item xs={4} key={idx}>
                                <Paper elevation={3}>
                                    <Image 
                                        src={project.image} 
                                        alt={project.name} 
                                    />
                                    <Typography variant="h4" component="h2">
                                        {project.name}
                                    </Typography>
                                    <Link href={project.git}>GitHub</Link>
                                    <Link href={project.live}>Live Site</Link>
                                </Paper>
                            </Grid>
                        ))}
                </Grid>
            </Container>
    }

    return projects ? loaded() : <h1>Loading...</h1>
}