import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { Fragment } from 'react'
import { StartIcon } from '../../assets/icons/StartIcon'
import profilePhoto from '../../assets/images/profile_example.png'
import startcss from '../../styles/ratingStart.module.css'

const priceEl = {
  alignItems: 'center',
  bg: '#6B7A8F',
  borderRadius: '15px 15px 0px 0px',
  color: 'white',
  content: `"190 $ por hora"`,
  display: 'flex',
  height: '40px',
  insetBlockStart: '-40px',
  insetInlineEnd: '0',
  justifyContent: 'center',
  position: 'absolute',
  width: '190px',
}

const stars = [
  { id: 's5', value: '5' },
  { id: 's4', value: '4' },
  { id: 's3', value: '3' },
  { id: 's2', value: '2' },
  { id: 's1', value: '1' },
]
export const SearchItem = () => {
  return (
    <Flex
      bg="#F2E4D9"
      gap="24px"
      m="auto"
      maxW="804px"
      mt="28px"
      pl="26px"
      pr="22px"
      py="28px"
      rounded="14px"
    >
      {/* imagen cuuidador */}
      <Box
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        rounded="14px"
        overflow="hidden"
        minH="184px"
      >
        <Image
          src={profilePhoto}
          objectFit="cover"
          h="full"
          w="full"
          transition="all .5s ease-in-out"
          _hover={{ transform: 'scale(1.05)' }}
        />
      </Box>

      {/* card */}
      <Box
        _before={priceEl}
        bg="white"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        minH="184px"
        position="relative"
        pt="12px"
        px="30px"
        rounded="15px 0px 15px 15px"
        w="516px"
      >
        {/* cuidador */}
        <Flex justify="space-between" h="24px">
          <Box
            as={'span'}
            textTransform="uppercase"
            fontWeight="700"
            fontSize="1.25rem"
          >
            BEATRIZ SOLANO
          </Box>
          {/* estrellas */}
          <Flex
            className={startcss.rating}
            direction="row-reverse"
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
        </Flex>

        {/* descripcion */}
        <Text mt="8px" fontSize="0.875rem" minH="67px" noOfLines={3}>
          <q>
            Desde pequeña he estado en contacto con animales. Me encanta poder
            verlos felices, jugueteando por los rincones de casa
          </q>
        </Text>

        {/* direccion */}
        <Box>
          {/* cercania */}
          <Box as={'span'} fontSize="0.875rem" color="blackAlpha.600">
            Se encuentra a 5 kms de tu dirección
          </Box>
          {/* ciudad */}
          <Box lineHeight="1rem">Palermo</Box>
          {/* estado, pais */}
          <Box display="block" lineHeight="1rem">
            Buenos Aires, Argentina
          </Box>
        </Box>

        <Button
          bg="#E48555"
          fontWeight="700"
          insetBlockEnd="20px"
          insetInlineEnd="20px"
          position="absolute"
          rounded="14px"
          w="138px"
        >
          Ver
        </Button>
      </Box>
    </Flex>
  )
}
