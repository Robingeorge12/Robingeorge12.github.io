import task from "../Components/Component.module.css"
import { SimpleGrid, Box, Text, Stack } from '@chakra-ui/react'
import styled from 'styled-components'



export default function About() {

    return (
        <Stack id="about" fontSize="20px" >
            <SimpleGrid column={[1,1,1,1]}>
                <Box bg="#0c0801" py={[0, 10, 20]} p={20} align="center">
                    <Box align="center" p={5} fontSize={["20px", "25px", "30px"]} textColor="antiquewhite" fontWeight={["700", "700", "700"]} fontFamily="Georgia, 'Times New Roman', Times, serif">ABOUT</Box>

                    <Box w={["100%", "70%", "80%"]}  justify="center">
                        <Text textColor="white" mt="10px" fontSize={["15px", "20px", "30px"]}>I am Robin George ,</Text>
                        <Text fontSize={["15px", "18px", "20px"]} color="white">
                            an aspiring Full Stack Web Developer with good knowledge in JavaScript, React JS, Redux, Express, NodeJS, MongoDB, HTML
                            and CSS.
                            Looking forword to applying and enhancing my skills and knowledge as a developer.
                        </Text>
                    </Box>

                </Box>
            </SimpleGrid>
        </Stack>
    )
}