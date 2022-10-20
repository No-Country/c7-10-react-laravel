import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
} from '@chakra-ui/react'

import profileExample from '../../assets/images/profile_example.png'
import addressIcon from '../../assets/icons/address.svg'
import { StartIcon } from '../../assets/icons/StartIcon'
import { Fragment } from 'react'
import startcss from '../../styles/ratingStart.module.css'

const stars = [
  { id: 's5', value: '5' },
  { id: 's4', value: '4' },
  { id: 's3', value: '3' },
  { id: 's2', value: '2' },
  { id: 's1', value: '1' },
]

export const PetCareCard = () => {
  return (
    <SimpleGrid
      bg="#F2E4D9"
      columns={2}
      gap="40px"
      m="auto"
      mt="88px"
      pb="20px"
      pt="26px"
      pl="20px"
      pr="28px"
      rounded="14px"
    >
      <Flex direction="column" justify="space-between">
        <Image
          src={profileExample}
          h="312px"
          w="376px"
          objectFit="cover"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          rounded="14px"
        />
        <Flex justify="center" alignItems="center">
          <Image src={addressIcon} h="60px" w="64px" />
          <Box as={'address'} fontStyle="normal" fontWeight="300">
            <Box lineHeight="1rem">Palermo</Box>
            <Box lineHeight="1rem">Buenos Aires, Argentina</Box>
            <Box fontWeight="700" lineHeight="1rem" fontSize="0.9375rem">
              Se encuentra a 5 kms de tu dirección
            </Box>
          </Box>
        </Flex>
      </Flex>

      <Box>
        {/* perfil */}
        <Flex justify="space-between">
          <Avatar
            h="92px"
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
            w="92px"
          />
          <Box textAlign="end">
            <Heading
              as="h4"
              fontSize="2rem"
              mb="10px"
              textTransform="uppercase"
            >
              beatriz SOLANO
            </Heading>
            <Flex
              className={startcss.rating}
              direction="row-reverse"
              alignSelf="flex-end"
              color="#aaa"
              as="form"
            >
              {stars.map((e) => (
                <Fragment key={e.id}>
                  <input type="radio" name="rating" value={e.value} />
                  <label
                    htmlFor={e.id}
                    onClick={() => {
                      console.log(e.value)
                    }}
                  >
                    <StartIcon />
                  </label>
                </Fragment>
              ))}
            </Flex>

            <Box fontWeight="700">27 servicios completados</Box>
          </Box>
        </Flex>

        {/* servicios */}

        <Flex justify="space-between" mt="38px">
          <Box color="#36515C" fontSize="1.5rem">
            Servicios
          </Box>
          <Box color="#36515C" fontSize="1.5rem">
            tarifa
          </Box>
        </Flex>
        <Flex justify="space-between" alignItems="center" mt="16px">
          <Box>
            {/* tipo de servicio */}
            <Box fontSize="1.125rem" lineHeight="1.125rem" fontWeight="700">
              Cuidado por horas
            </Box>
            {/* descripcion */}
            <Box>En casa del cuidador</Box>
          </Box>
          {/* precio */}
          <Box fontSize="1.5rem" lineHeight="1.5rem" fontWeight="700">
            1.200$
          </Box>
        </Flex>

        <Flex justify="space-between" alignItems="center" mt="16px">
          <Box>
            {/* tipo de servicio */}
            <Box fontSize="1.125rem" lineHeight="1.125rem" fontWeight="700">
              Cuidado por horas
            </Box>
            {/* descripcion */}
            <Box>En casa del cuidador</Box>
          </Box>
          {/* precio */}
          <Box fontSize="1.5rem" lineHeight="1.5rem" fontWeight="700">
            1.200$
          </Box>
        </Flex>

        <Flex justify="space-between" alignItems="center" mt="16px">
          <Box>
            {/* tipo de servicio */}
            <Box fontSize="1.125rem" lineHeight="1.125rem" fontWeight="700">
              Cuidado por horas
            </Box>
            {/* descripcion */}
            <Box>En casa del cuidador</Box>
          </Box>
          {/* precio */}
          <Box fontSize="1.5rem" lineHeight="1.5rem" fontWeight="700">
            1.200$
          </Box>
        </Flex>

        <Flex justify="space-between" alignItems="center" mt="16px">
          <Box>
            {/* tipo de servicio */}
            <Box fontSize="1.125rem" lineHeight="1.125rem" fontWeight="700">
              Cuidado por horas
            </Box>
            {/* descripcion */}
            <Box>En casa del cuidador</Box>
          </Box>
          {/* precio */}
          <Box fontSize="1.5rem" lineHeight="1.5rem" fontWeight="700">
            1.200$
          </Box>
        </Flex>

        <Button
          bg="#E48555"
          display="flex"
          mt="34px"
          mx="auto"
          rounded="14px"
          textAlign="center"
          w="280px"
        >
          Solicitar servicios
        </Button>
      </Box>
    </SimpleGrid>
  )
}
