import { Box, SimpleGrid, HStack, Image, Text, Button, Stack, VStack, Link } from "@chakra-ui/react";
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
        <Stack id="projects" p="10px" bgColor="#020214" pb="60px">
            <Text align="center" fontSize={["20px", "25px", "30px"]} textColor="antiquewhite" fontWeight={["700", "700", "700"]} fontFamily="Georgia, 'Times New Roman', Times, serif">PROJECT</Text>
            <SimpleGrid columns={[1, 2, 3, 3]} spacing={10}>
                <Box>

                    <VStack>
                        <Box h="400px" w={["280px","320","350px"]} spacing="40px" bgColor="#060c30">
                            <Image width="100%" height="150px" src="https://i.ibb.co/pQBzxRV/Home.png" alt="prpic" />
                            <Box>
                                <Text textColor="red.300">INDIAMART.COM</Text>
                                <Box w={["250px","260px","320px"]} ml="12px" pb="10px">
                                <Text align="left" textColor="white">
                                    IndiaMart.com is known for its unparalleled assortment of pharmaceuticals and cosmetics products. </Text>
                                <Text align="left" textColor="white">  A collaborative project built by a team of 5,executed in 5 days</Text>
                                </Box>
                                <Text textColor="white">* HTML | CSS | JAVASCRIPTS</Text>

                            </Box>
                            <HStack>
                               <Box ml="60px" mr={4}><Link href="https://github.com/Avdhoot-Kurhe/indianMART_Site"><Button bgColor="red.300" color="white">CODE <Text pl={4}><BsGithub /></Text> </Button></Link></Box> 
                               <Box mr="-20px"> <Link href="https://idyllic-elf-19b91b.netlify.app/"><Button bgColor="red.300" color="white">LIVE <Text pl={4}><GoLinkExternal /></Text></Button></Link></Box> 

                            </HStack>
                        </Box>
                    </VStack>
                </Box>
                <Box >
                    <VStack>
                        <Box bgColor="#060c30" h="400px" w={["280px","320","350px"]} spacing="40px">
                            <Image width="100%" height="150px" src="https://i.ibb.co/hLhppT4/Screenshot-new.png" alt="pr4" />
                            <Box>
                                <Text textColor="red.300">SHINE.COM</Text>
                                <Box w={["250px","260px","320px"]} ml="12px" pb="10px">
                                <Text align="left" textColor="white">Shine.com is a job career guidace and job searching website</Text>
                                <Text textColor="white"align="left">An individual mini project ,completed in 4 days</Text>
                                </Box>
                                <Text mt="25px" textColor="white">*  HTML | CSS3 | REACT JS </Text>
                                
                            </Box>
                            <HStack>
                            <Box ml="60px" mr={4}><Link href="https://github.com/Robingeorge12/capable-downtown-7255"><Button bgColor="red.300" color="white">CODE <Text pl={4}><BsGithub /></Text> </Button></Link></Box>
                            <Box mr="60px" ><Link href="https://capable-downtown-7255.vercel.app/"><Button bgColor="red.300" color="white">LIVE <Text pl={4}><GoLinkExternal /></Text></Button></Link></Box>
                            </HStack>
                        </Box>
                    </VStack>
                </Box>
                <Box>
                    <VStack>
                        <Box bgColor="#060c30" h="400px" w={["280px","320","350px"]} spacing="40px">
                            <Image width="100%" height="150px" src="https://i.ibb.co/WsyHVHh/Screenshot-116.png" alt="pr5" />
                            <Box >
                                <Text textColor="red.300">GEAR-BEST.COM</Text>
                                <Box w={["250px","260px","320px"]} ml="12px" pb="10px">
                                <Text align="left" textColor="white"> Gear-Best.com is best in selling gadgets and hardwares. </Text>
                                <Text align="left" textColor="white">It was a collaborative project of 6 members, completed in 5 days</Text>
                                </Box>
                                <Text mt="25px" textColor="white">* HTML | CSS3 | JAVASCRIPT </Text>
                            </Box>
                            <HStack>
{/* //https://gearbest-iflh.vercel.app/" */}
                            <Box ml="70px" mr={4}> <Link href="https://github.com/Lalitsingh28/GEARBEST_CLONE"><Button bgColor="red.300" color="white" >CODE <Text pl={2}><BsGithub /></Text> </Button></Link></Box>
                            <Box mr="60px" ><Link href="" ><Button bgColor="red.300" color="white" >LIVE <Text pl={2}><GoLinkExternal /></Text></Button></Link></Box>
                            </HStack>
                        </Box>
                    </VStack>
                </Box>


            </SimpleGrid>
        </Stack >
    )
}