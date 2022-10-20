import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  StackDivider,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import React from 'react'
import { Breadcrumb } from '../../components/Breadcrumb'
import { PetCareCard } from '../../components/PetCare/PetCareCard'

export const PetCare = () => {
  return (
    <>
      <Breadcrumb title="Perfil de cuidador" />
      {/* card */}
      <Container maxW="802px" p="0">
        <PetCareCard />

        {/* About */}
        <Box mt="88px" mx="auto">
          <Heading fontSize="1.875rem">Sobre Beatriz</Heading>
          <Text fontSize="1.25rem" mt="26px">
            Tengo 33 años, soy estudiante de artes plásticas, amante de las
            mascotas y de la vida al aire libre. Soy voluntaria en una ONG de
            rescate de animales donde brindo hospedaje temporal a los peludos
            más necesitados. Vivo sola en un amplio PH con patio al aire libre.
            Te aseguro que tu mascota tendrá un excelente tiempo conmigo.
          </Text>
        </Box>
        {/* Mascotas */}
        <Box mt="54px" mx="auto">
          <Heading fontSize="1.875rem">Mascotas de Beatriz</Heading>
          <Wrap mt="28px" spacing="32px">
            <WrapItem>
              <Avatar
                h="92px"
                w="92px"
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
              />
            </WrapItem>

            <WrapItem>
              <Avatar
                h="92px"
                w="92px"
                name="Kent Dodds"
                src="https://bit.ly/kent-c-dodds"
              />
            </WrapItem>
          </Wrap>
        </Box>
      </Container>

      {/* valoracion */}
      <Box bg="#82A7BF38" mt="24px" pt="30px" pb="42px">
        <Container p="0" maxW="802px">
          <Heading fontSize="1.875rem">
            Revisa lo que opinan sus clientes
          </Heading>

          <Box position="relative">
            <VStack
              border="2px solid #82A7BF"
              rounded="14px"
              divider={<StackDivider borderColor="#82A7BF" />}
              bg="#ffffff"
              mt="22px"
            >
              <Flex px="16px" mt="16px" mb="20px">
                <Avatar h="92px" w="92px" />
                <Box ml="28px">
                  <Heading as="h4" fontSize="1.25rem">
                    Maria lopez
                  </Heading>
                  <Text fontSize="1.25rem" noOfLines={3} mt="8px">
                    <q>
                      Excelente cuidadora, muy amable y en comunicación en todo
                      momento. La recomiendo mucho.
                    </q>
                  </Text>
                  <Box fontSize="1.25rem">fecha</Box>
                </Box>
              </Flex>

              <Flex px="16px" mt="16px" mb="28px">
                <Avatar h="92px" w="92px" />
                <Box ml="28px">
                  <Heading as="h4" fontSize="1.25rem">
                    Maria lopez
                  </Heading>
                  <Text fontSize="1.25rem" noOfLines={3} mt="8px">
                    <q>
                      Excelente cuidadora, muy amable y en comunicación en todo
                      momento. La recomiendo mucho.
                    </q>
                  </Text>
                  <Box fontSize="1.25rem">fecha</Box>
                </Box>
              </Flex>
            </VStack>

            <Button
              bg="white"
              borderColor="#82A7BF"
              fontSize="1.25rem"
              insetBlockEnd="-16px"
              insetInlineEnd="0"
              position="absolute"
              rounded="16px"
              variant="outline"
              w="138px"
            >
              Ver más
            </Button>
          </Box>
        </Container>
      </Box>

      <Container p="0" maxW="802px">
        {/* Calendario */}
        <Box mt="24px">
          <Heading fontSize="1.875rem">Calendario</Heading>
          <Text fontSize="1.25rem" mt="26px">
            Confirma las fechas que deseas para el servicio de cuidador
          </Text>
        </Box>
      </Container>
    </>
  )
}
