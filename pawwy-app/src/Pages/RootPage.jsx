import { Box, Center, Flex, Spinner } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { useUser } from '../hooks/useUser'

export const RootPage = () => {
  const { user } = useUser()

  // if (!user) return
  console.log(user)

  // HomePage
  return (
    <Box position="relative">
      <Box as={'header'}>
        {/* navbar */}
        <Navbar />

        {/* breadcrumbs */}

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
      {/* contenido de la pagina */}
      <Outlet />

      {/* footer */}
      <Footer />
    </Box>
  )
}
