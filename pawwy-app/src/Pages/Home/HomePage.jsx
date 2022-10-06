import { Container } from '@chakra-ui/react'
import React from 'react'
import { FormHome } from '../../components/Home/FormHome'

export const HomePage = () => {
  return (
    <Container maxWidth="960px" padding="0">
      <FormHome />
    </Container>
  )
}
