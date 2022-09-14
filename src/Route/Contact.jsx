import { Box, SimpleGrid, Text, Image } from "@chakra-ui/react";
import task from "../Components/Component.module.css"
import styled from 'styled-components'
import { MdOutlineCopyright } from "react-icons/md";

export default function Contact() {

    return (
        <SimpleGrid columns={[3, 2, 1]}>
            <Box className={task.contact} >
                <Text className={task.contHd}>CONTACT</Text>
                <Box className={task.cont1}>
                    <Box className={task.contBox1}>
                        <Box className={task.contLink}>
                            <a href="https://www.linkedin.com/in/robin-george-909699232"><Image height="100%" width="70px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png" alt="cont1" /></a>
                            <a href="https://www.linkedin.com/in/robin-george-909699232" ><Text style={{ marginTop: "20px", color: "blue", marginLeft: "70px", fontSize: "25px" }}>Linkedin</Text></a> </Box>
                    </Box>
                    <Box className={task.contBox2}>
                        <Box className={task.contLink}>
                            <a href="https://github.com/Robingeorge12"><Image height="100%" width="70px" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="cont1" /></a>
                            <a href="https://github.com/Robingeorge12" ><Text style={{ marginTop: "20px", color: "blue", marginLeft: "70px", fontSize: "25px" }}>Github</Text></a>
                        </Box>
                    </Box>
                    <Box className={task.contBox2}>
                        <Box className={task.contLink}>
                            <a href="mailto:robingsa.btch@gmail.com"><Image height="100%" width="70px" src="https://w7.pngwing.com/pngs/845/1016/png-transparent-computer-icons-email-address-simple-mail-transfer-protocol-bounce-address-envelopes.png" alt="cont1" /></a>
                            <a href="mailto:robingsa.btch@gmail.com" ><Text style={{ marginTop: "20px", color: "blue", marginLeft: "70px", fontSize: "25px" }}>Mail</Text></a>
                        </Box>
                    </Box>
                    <Box className={task.contBox2}>
                        <Box className={task.contLink}>
                            <Image height="100%" width="70px" src="https://media.istockphoto.com/vectors/phone-icon-call-application-symbol-flat-interface-logo-simple-shape-vector-id1254036367?k=20&m=1254036367&s=170667a&w=0&h=4Kc9lqCXgDWL8KmyR9wFRbco0pcBB1LoFZ6bSxwrbpE=" alt="cont1" />
                           <Text style={{ marginTop: "20px", color: "blue", marginLeft: "70px", fontSize: "20px" }}>+91 9961276878</Text>
                        </Box>
                    </Box>
                    {/* <Box className={task.contBox3}>
                        <Box className={task.final}>
                            <Text >Designed and buiit by </Text>  <h5 style={{ display: "flex" }}>Robin George<MdOutlineCopyright /> 2022</h5>
                        </Box>

                    </Box> */}
                </Box>



            </Box>


        </SimpleGrid>
    )
}