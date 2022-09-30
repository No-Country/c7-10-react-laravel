import { Box, ChakraProvider } from '@chakra-ui/react'
import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError()
  // todo ErrorPage
  return (
    <ChakraProvider>
      <Box>
        <Box as={'span'} color="red">
          {error.statusText || error.message}
        </Box>
      </Box>
    </ChakraProvider>
  )
}
