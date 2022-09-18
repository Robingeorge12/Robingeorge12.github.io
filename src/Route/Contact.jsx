import { Box, SimpleGrid, Text, Image, Stack, Link, HStack } from "@chakra-ui/react";
import task from "../Components/Component.module.css"
import styled from 'styled-components'
import { MdOutlineCopyright } from "react-icons/md";

export default function Contact() {

    return (
        <Stack id="contact" pb="80px" bgColor="#08002d" direction={{base:'column',md:'column',lg:'column'}}>
            <Text align="center" fontSize={["20px", "25px", "30px"]} p="30px" textColor="antiquewhite" fontWeight={["700", "700", "700"]} fontFamily="Georgia, 'Times New Roman', Times, serif">CONTACT</Text>
            <SimpleGrid columns={["200px", "350px","750px"]}>
                <Box align="center" spacing={10}>


                    <HStack w={["300px","350px","400px"]} spacing="100px" mb="10px" bgColor="#1b2466">
                        <Box >
                            <Link href="https://www.linkedin.com/in/robin-george-909699232"><Image height="100%" width="70px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png" alt="cont1" /></Link>
                        </Box>
                        <Box>
                            <Link href="https://www.linkedin.com/in/robin-george-909699232" ><Text textColor='white' fontSize={["20px","25px","30px"]}>Linkedin</Text></Link> </Box>
                    </HStack>



                    <HStack bgColor="#1b2466" w={["300px","350px","400px"]} spacing="100px" mb="10px">
                        <Box>
                            <Link href="https://github.com/Robingeorge12"><Image height="100%" width="70px" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="cont1" /></Link>
                        </Box>
                        <Box>
                            <Link href="https://github.com/Robingeorge12" ><Text textColor='white' fontSize={["20px","25px","30px"]}>Github</Text></Link>
                        </Box>
                    </HStack>

                    <HStack bgColor="#1b2466" w={["300px","350px","400px"]} spacing="100px" mb="10px">
                       
                            <Box>
                            <Link href="mailto:robingsa.btch@gmail.com"><Image height="100%" width="70px" src="https://w7.pngwing.com/pngs/845/1016/png-transparent-computer-icons-email-address-simple-mail-transfer-protocol-bounce-address-envelopes.png" alt="cont1" /></Link>
                            </Box>
                            <Box>
                            <Link href="mailto:robingsa.btch@gmail.com" ><Text textColor='white' fontSize={["20px","25px","30px"]}>Mail</Text></Link>
                            </Box>
                       
                    </HStack>
                    <HStack bgColor="#1b2466" w={["300px","350px","400px"]} spacing="20px" mb="10px">
                        <Box>
                            <Image height="100%" width="70px" src="https://media.istockphoto.com/vectors/phone-icon-call-application-symbol-flat-interface-logo-simple-shape-vector-id1254036367?k=20&m=1254036367&s=170667a&w=0&h=4Kc9lqCXgDWL8KmyR9wFRbco0pcBB1LoFZ6bSxwrbpE=" alt="cont1" />
                            </Box>
                            <Box>
                            <Text textColor='white' fontSize={["20px","25px","30px"]}>+91 9961276878</Text>
                        </Box>
                    </HStack>
                    {/* <Box className={task.contBox3}>
                        <Box className={task.final}>
                            <Text >Designed and buiit by </Text>  <h5 style={{ display: "flex" }}>Robin George<MdOutlineCopyright /> 2022</h5>
                        </Box>

                    </Box> */}





                </Box>

            </SimpleGrid >
        </Stack >
    )
}