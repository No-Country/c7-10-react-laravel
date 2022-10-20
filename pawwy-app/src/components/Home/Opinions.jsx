import {
  Box,
  Button,
  Circle,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import perritoImg from '../../assets/images/perrito.jpg'
import arrowIcon from '../../assets/icons/arrowRight.svg'

export const Opinions = () => {
  return (
    <Box margin="auto" width="802px" marginBlockStart="66px">
      <Heading textAlign="center">Conoce lo que opinan de nosotros</Heading>
      <Box
        border="3px solid #E48555"
        padding="20px"
        width="fit-content"
        rounded="14px"
        marginBlockStart="46px"
      >
        <Flex
          border="3px solid #E48555"
          height="332px"
          align="center"
          paddingInline="34px"
          paddingBlock="30px"
          rounded="14px"
          width="762px"
          position="relative"
        >
          <Image
            src={perritoImg}
            height="270px"
            width="320px"
            marginInlineEnd="40px"
            rounded="16px"
            shadow="lg"
          />
          <Stack>
            <Text as={'q'} height="140px">
              Desde que probe Pawwy, ha sido un antes y un después en mi vida.
              Amo a Lola pero también me encanta poder ir al after office
              despues de 8 horas de trabajo sin preocuparme de que tengo que
              volver a casa a sacar a Lola. Una increible solución
            </Text>
            <Text as={'span'} marginBlock="10px" textAlign="end">
              Marina Renis
            </Text>
          </Stack>
          <Circle _hover={{ cursor: 'pointer' }}>
            <Image
              src={arrowIcon}
              position="absolute"
              insetBlockEnd="12px"
              insetInlineEnd="12px"
            />
          </Circle>
        </Flex>
      </Box>
    </Box>
  )
}
