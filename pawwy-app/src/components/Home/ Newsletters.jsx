import { Box, Button, Heading, Input, Stack } from '@chakra-ui/react'

export const Newsletters = () => {
  return (
    <Box marginBlockStart="92px">
      <Heading as={'h4'} fontSize="1.5rem" fontWeight="700">
        Sé el primero en enterarte de las novedades en Pawwy
      </Heading>

      <Box as={'form'} marginBlockStart="16px">
        <Input type="text" placeholder="maria@pawwy.com" />
        <Button
          fontWeight="700"
          marginBlockStart="18px"
          rounded="14px"
          width="268px"
        >
          Recibir Newsletters
        </Button>
      </Box>
    </Box>
  )
}
