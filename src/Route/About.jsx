import task from "../Components/Component.module.css"
import { SimpleGrid,Box } from '@chakra-ui/react'
import styled from 'styled-components'



export default function About() {

    return (
        <SimpleGrid  >

            <Box className={task.about} py={[0,10,20]}>
                <Box className={task.hd}>ABOUT</Box>

                <Box className={task.para}>
                    <h3 style={{color:"white",marginTop:"10px",fontSize:"20px"}}>I am Robin George ,</h3>
                    <p className={task.p1}>
an aspiring Full Stack Web Developer with good knowledge in JavaScript, React JS, Redux, Express, NodeJS, MongoDB, HTML
and CSS.
Looking forword to applying and enhancing my skills and knowledge as a developer. 
                    </p>
                </Box>

            </Box>

            </SimpleGrid>
    )
}