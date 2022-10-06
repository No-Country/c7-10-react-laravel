import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Navbar/Navbar'

export const RootPage = () => {
  //Todo HomePage
  return (
    <Box position="relative">
      <Box as={'header'}>
        {/* navbar */}
        <Navbar />

        {/* breadcrumbs */}
        <Box backgroundColor="#82A7BF">
          <Flex
            align="center"
            height="50px"
            justify="end"
            maxWidth="960px"
            margin="auto"
          >
            <Box as={Link} fontWeight="700" fontSize="1.5rem">
              ¿Queres ser cuidador?
            </Box>
          </Flex>
        </Box>

        <Box
          position="absolute"
          width="50%"
          height="80px"
          background="#F2E4D9"
          insetBlock="0"
          insetInlineStart="50%"
          zIndex="-1"
          rounded="100% 0% 85% 15% / 0% 100% 0% 100% "
        ></Box>
      </Box>
      <Outlet />
      <Footer />
    </Box>
  )
}
