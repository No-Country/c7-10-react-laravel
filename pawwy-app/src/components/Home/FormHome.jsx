import { Box, Button, Input, SimpleGrid, Stack } from '@chakra-ui/react'
import React from 'react'

export const FormHome = () => {
  return (
    <SimpleGrid
      border="2px solid #6B7A8F"
      rounded="15px"
      height="332px"
      width="764px"
      margin="auto"
      columns={2}
      marginBlockStart="90px"
    >
      <Box></Box>
      <Stack borderLeft="2px solid #6B7A8F">
        <Input type="date" />
        <Button colorScheme="blue">Buscar</Button>
      </Stack>
    </SimpleGrid>
  )
}
