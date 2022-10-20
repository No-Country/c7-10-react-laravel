import { Box, Center, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import mascotas from '../../assets/images/mascotas.png'

export const Footer = () => {
  return (
    <Box
      marginBlockStart="262px"
      height="120px"
      backgroundColor="#82A7BF"
      position="relative"
    >
      <Image
        src={mascotas}
        position="absolute"
        insetBlockEnd="26%"
        insetInline="50%"
        sx={{ transform: 'translateX(-50%)' }}
      />
    </Box>
  )
}
