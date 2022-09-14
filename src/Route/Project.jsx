import { Box, SimpleGrid, HStack, Image, Text, Button,useBreakpointValue } from "@chakra-ui/react";
import task from "../Components/Component.module.css"
import styled from 'styled-components'
import { BsGithub } from 'react-icons/bs';
import { GoLinkExternal } from "react-icons/go";


// {<a href="https://ibb.co/KbRCC8f"><img src="https://i.ibb.co/hLhppT4/Screenshot-new.png" alt="Screenshot-new" border="0"></a>}
{/* <a href="https://ibb.co/34qf500"><img src="https://i.ibb.co/CmZJpnn/Screenshot2.png" alt="Screenshot2" border="0"></a> */ }
{/* <a href="https://ibb.co/9GTpZpD"><img src="https://i.ibb.co/WsyHVHh/Screenshot-116.png" alt="Screenshot-116" border="0"></a> */ }
export default function Project() {
// const col = useBreakpointValue({base:2,md:1})
    return (
        <SimpleGrid columns={[]}>
            <Box className={task.project}>
                <Text className={task.prHd}>PROJECT</Text>
                <HStack className={task.pr}>
                    <Box className={task.pr1}>
                        <Image width="100%" height="150px" src="https://i.ibb.co/pQBzxRV/Home.png" alt="prpic" />
                        <Box className={task.prA}>
                            <h4>INDIAMART.COM</h4><br />
                            <h6 style={{ marginTop: "-20px" }}>
                                IndiaMart.com is known for its unparalleled assortment of pharmaceuticals and cosmetics products. </h6><br />
                            <li style={{ marginTop: "-25px" }}> A collaborative project built by a team of 5,executed in 5 days</li><br />
                            <p style={{ marginTop: "-26px" }}>* HTML | CSS | JAVASCRIPTS</p>

                        </Box>
                        <Box className={task.prB}>
                            <a href="https://github.com/Avdhoot-Kurhe/indianMART_Site" style={{ marginLeft: "-40px" }}><Button style={{ backgroundColor: "violet" }}>CODE <h5 style={{ marginLeft: "10px" }}><BsGithub /></h5> </Button></a>
                            <a href="https://idyllic-elf-19b91b.netlify.app/" style={{ marginLeft: "30px" }}><Button style={{ backgroundColor: "violet" }}>LIVE <h5 style={{ marginLeft: "10px" }}><GoLinkExternal /></h5></Button></a>

                        </Box>

                    </Box>
                    <Box className={task.pr2}>
                        <Image width="100%" height="150px" src="https://i.ibb.co/hLhppT4/Screenshot-new.png" alt="pr4" />
                        <Box className={task.prA}>
                            <h4>SHINE.COM</h4>
                            <h6 style={{ marginTop: "0px" }}>Shine.com is a job career guidace and job searching website</h6><br />
                            <li style={{ marginTop: "-20px" }}>An individual mini project ,completed in 4 days</li><br />
                            <p style={{ marginTop: "-3px" }}>*  HTML | CSS3 | REACT JS </p>
                        </Box>
                        <Box className={task.prB}>
                            <a href="https://github.com/Robingeorge12/capable-downtown-7255" style={{ marginLeft: "-40px" }}><Button style={{ backgroundColor: "violet" }}>CODE <h5 style={{ marginLeft: "10px" }}><BsGithub /></h5> </Button></a>
                            <a href="https://capable-downtown-7255.vercel.app/" style={{ marginLeft: "30px" }}><Button style={{ backgroundColor: "violet" }}>LIVE <h5 style={{ marginLeft: "10px" }}><GoLinkExternal /></h5></Button></a>
                        </Box>

                    </Box>
                    <Box className={task.pr3}>
                        <Image width="100%" height="150px" src="https://i.ibb.co/WsyHVHh/Screenshot-116.png" alt="pr5" />
                        <Box className={task.prA}>
                            <h4>GEAR-BEST.COM</h4>
                            <h6> Gear-Best.com is best in selling gadgets and hardwares. </h6>
                            <li style={{ marginTop: "25px" }}>It was a collaborative project of 6 members, completed in 5 days</li>
                            <p style={{ marginTop: "px" }}>* HTML | CSS3 | JAVASCRIPT </p>
                        </Box>
                        <Box className={task.prB}>

                            <a href="https://github.com/Lalitsingh28/GEARBEST_CLONE" style={{ marginLeft: "-40px" }}><Button style={{ backgroundColor: "violet" }}>CODE <h5 style={{ marginLeft: "10px" }}><BsGithub /></h5> </Button></a>
                            <a href="https://stunning-duckanoo-e6ea7b.netlify.app/" style={{ marginLeft: "30px" }}><Button style={{ backgroundColor: "violet" }}>LIVE <h5 style={{ marginLeft: "10px" }}><GoLinkExternal /></h5></Button></a>
                        </Box>

                    </Box>

                </HStack>


            </Box>


        </SimpleGrid>
    )
}