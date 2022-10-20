import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from '../../components/Breadcrumb'
import { Newsletters } from '../../components/Home/ Newsletters'
import { FormHome } from '../../components/Home/FormHome'
import { Opinions } from '../../components/Home/Opinions'
import { Solutions } from '../../components/Home/Solutions'
import { useUser } from '../../hooks/useUser'

export const HomePage = () => {
  return (
    <>
      <Breadcrumb title="¿Quieres ser cuidador?" link={true} />
      <Container maxWidth="960px" padding="0">
        <FormHome />
        <Solutions />
        <Opinions />
        <Newsletters />
      </Container>
    </>
  )
}
