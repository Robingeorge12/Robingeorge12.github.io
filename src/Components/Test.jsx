// 1. Import the utilities
import { Box, extendTheme, Text,Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import task from "../Components/Component.module.css"

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

// 3. Extend the theme
const theme = extendTheme({ breakpoints })

// 4. Now you can use the custom breakpoints
function Test() {


  return  <Box width={{ base: '100%', sm: '50%', md: '25%' }} >
    
    <Box p={4} display={{ md: 'flex' }}>
  <Box flexShrink={0}>
    <Image
      borderRadius='lg'
      width={{ md: 40 }}
      src='https://bit.ly/2jYM25F'
      alt='Woman paying for a purchase'
    />
  </Box>
  <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
    <Text
      fontWeight='bold'
      textTransform='uppercase'
      fontSize='sm'
      letterSpacing='wide'
      color='teal.600'
    >
      Marketing
    </Text>
    <Link
      mt={1}
      display='block'
      fontSize='lg'
      lineHeight='normal'
      fontWeight='semibold'
      href='#'
    >
      Finding customers for your new business
    </Link>
    <Text mt={2} color='gray.500'>
      Getting a new business off the ground is a lot of hard work. Here are five
      ideas you can use to find your first customers.
    </Text>
  </Box>
</Box>

    </Box>

}
export default Test