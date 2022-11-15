import { Box, SimpleGrid, Stack } from "@chakra-ui/react";
import GitHubCalendar from 'react-github-calendar';


export default function GithubCal() {

    return (
        <Stack bgColor="#060c30" p={"10"}>
            <SimpleGrid columns={["200px", "350px","750px"]}>

                <Box>
                    <Box align="center">
                        <GitHubCalendar username="Robingeorge12" />
                    </Box>

                </Box>


            </SimpleGrid>

        </Stack>
    )
}