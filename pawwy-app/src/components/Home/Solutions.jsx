import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'

import dogHeartIcon from '../../assets/icons/dogHeart.svg'
import okIcon from '../../assets/icons/ok.svg'
import searchIcon from '../../assets/icons/search.svg'

export const Solutions = () => {
  return (
    <Box width="802px" margin="auto" marginBlockStart="64px">
      <Heading
        width="560px"
        fontSize="2.625rem"
        margin="auto"
        textAlign="center"
      >
        Somos la mejor solución para ti y tus mascotas
      </Heading>
      <Flex justify="space-between" marginBlockStart="80px">
        <Box width="186px">
          <Image src={searchIcon} margin="auto" width="90px" height="90px" />
          <Text>
            Realiza la búsqueda de servicios de acuerdo a tus necesidades.
          </Text>
        </Box>

        <Box width="186px">
          <Image src={dogHeartIcon} margin="auto" width="90px" height="90px" />
          <Text>
            Escoge el cuidador que más se adapte a tus gustos y los de tus
            peludos.
          </Text>
        </Box>

        <Box width="186px">
          <Image src={okIcon} margin="auto" width="90px" height="90px" />
          <Text>
            Confirma tu reserva y ¡disfruta tu salida sin preocupaciones!
          </Text>
        </Box>
      </Flex>
      <Button
        width="268px"
        rounded="14px"
        marginBlockStart="20px"
        fontSize="1.25rem"
        fontWeight="700"
      >
        Buscar cuidador
      </Button>
    </Box>
  )
}
