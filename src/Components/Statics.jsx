import React from 'react'
import { Box, SimpleGrid, Stack,Image } from "@chakra-ui/react";
const Statics = () => {
  return (
    <Stack bg="#0c0801">
    <SimpleGrid columns={["200px", "350px","750px"]}>

        <Box>
            <Box align="center">
            <Image src="https://github-readme-stats.vercel.app/api?username=Robingeorge12&theme=algolia&hide_border=false&include_all_commits=true&count_private=true&show_icons=true" alt="pic" />
            </Box>

        </Box>


    </SimpleGrid>

</Stack>
  )
}

export default Statics
