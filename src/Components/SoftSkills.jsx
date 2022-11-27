import { Box, SimpleGrid, Stack, Text, VStack, Image, HStack, Center, Flex } from "@chakra-ui/react";
import image1 from "../image1.png"

//6  border={"4px"}
const SoftSkills = () => {
//data:image/png;base64,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
//data:image/jpeg;base64,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" alt="" />
//data:image/png;base64,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




    return (
        <Box bg="#0c0801" py={10}>

            <Center >
                <Flex align={"center"} direction={"column"} >

                <Text p={5} fontSize={["20px", "25px", "30px"]} textColor="antiquewhite" fontWeight={["700", "700", "700"]} fontFamily="Georgia, 'Times New Roman', Times, serif">SOFT SKILLS</Text>
                <SimpleGrid columns={[1, 1, 3, 5]} gap={"6"}>
                    <VStack  >
                        <Image w={["300px","250px","200px"]} h="150px" src="https://t4.ftcdn.net/jpg/02/11/39/51/360_F_211395193_ILTeSLFdGh1LIVxYwCcjGLcUCDBxiwTr.jpg" alt="" />
                        <Text>Team Player</Text>
                    </VStack>

                    <VStack >

                       {/* //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPxCd25gN5i7hyf2j4CZGyY7y5T7vWekVIlw&usqp=CAU  */}
                        <Image w={["300px","250px","200px"]} h="150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPxCd25gN5i7hyf2j4CZGyY7y5T7vWekVIlw&usqp=CAU" alt="" />
                        <Text>Communication Skills</Text>
                    </VStack>

                    <VStack >
                        <Image w={["300px","250px","200px"]} h="150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf3Q7NLes7OaUYRFxajiu_dNQQiBEl1OrXMQ&usqp=CAU" alt="" />
                        <Text>Time Management</Text>
                    </VStack>

                    <VStack >
                        <Image w={["300px","250px","200px"]} h="150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogBaBLsNl1rnUteqsDxJXafATAkCySrtdQQ&usqp=CAU" alt="" />
                        <Text>Problem Solving</Text>
                    </VStack>

                    <VStack >
                        <Image w={["300px","250px","200px"]} h="150px" src={image1} alt="" />
                        <Text>Adaptability</Text>
                    </VStack>
                </SimpleGrid>
                </Flex>
            </Center>




        </Box>
    )
}

export default SoftSkills
