import { useState, useEffect } from "react"
import { Paper, Button, Container, Grid, Typography } from "@mui/material"
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
                            <Grid item xs={4}>
                                <Paper elevation={3} key={idx}>
                                    <Image 
                                        src={project.image} 
                                        alt={project.name} 
                                    />
                                    <Typography variant="h4" component="h2">
                                        {project.name}
                                    </Typography>
                                    <Button to={project.git}>GitHub</Button>
                                    <Button to={project.live}>Live Site</Button>
                                </Paper>
                            </Grid>
                        ))}
                </Grid>
            </Container>
    }

    return projects ? loaded() : <h1>Loading...</h1>
}