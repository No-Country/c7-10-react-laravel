import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Breadcrumb = ({ title = 'home', link = false }) => {
  return (
    <Box backgroundColor="#82A7BF">
      <Box height="50px" maxWidth="960px" margin="auto" py="8px">
        {link ? (
          <Box
            as={Link}
            fontWeight="700"
            fontSize="1.5rem"
            textAlign="end"
            display="block"
          >
            {title}
          </Box>
        ) : (
          <Box fontWeight="700" fontSize="1.5rem">
            {title}
          </Box>
        )}
      </Box>
    </Box>
  )
}
