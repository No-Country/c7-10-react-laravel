import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'

import googleCalendar from '../../assets/icons/googleCalendar.svg'

export const FormHome = () => {
  return (
    <Grid
      border="2px solid #6B7A8F"
      rounded="15px"
      height="334px"
      width="764px"
      margin="auto"
      templateColumns="1fr 294px"
      marginBlockStart="90px"
    >
      <GridItem padding="12px">
        <SimpleGrid columns={2}>
          {/* tipo de mascota */}
          <FormControl>
            <FormLabel>Selecciona tus mascotas</FormLabel>

            <Checkbox mr="8px">Perro</Checkbox>
            <Checkbox>Gato</Checkbox>
          </FormControl>

          <Flex>
            {/* cantidad y peso */}
            <FormControl>
              <FormLabel>Cantidad</FormLabel>

              <NumberInput max={4} min={1} height="38px" w="88px">
                <NumberInputField rounded="14px" fontSize="1.25rem" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl>
              <FormLabel>Peso</FormLabel>

              <NumberInput max={50} min={1} height="38px" w="88px">
                <NumberInputField rounded="14px" fontSize="1.25rem" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </Flex>
        </SimpleGrid>

        {/* Lugar del servicio */}
        <FormControl mt="14px">
          <FormLabel>
            ¿Dónde necesitas el servicio de cuidado para mascostas?
          </FormLabel>

          <Button
            mr="8px"
            width="138px"
            variant="outline"
            borderColor="#82A7BF"
            rounded="14px"
            fontSize="0.875rem"
          >
            Mi casa
          </Button>

          <Button
            width="138px"
            variant="outline"
            borderColor="#82A7BF"
            rounded="14px"
            fontSize="0.875rem"
          >
            Casa del cuidador
          </Button>
        </FormControl>

        {/* tipo de servicio */}
        <FormControl mt="4px">
          <FormLabel>¿Tipo de servicio?</FormLabel>
          <Button
            mr="8px"
            width="138px"
            variant="outline"
            borderColor="#82A7BF"
            rounded="14px"
            fontSize="0.875rem"
          >
            Horas
          </Button>
          <Button
            width="138px"
            variant="outline"
            borderColor="#82A7BF"
            rounded="14px"
            fontSize="0.875rem"
          >
            Días
          </Button>
        </FormControl>

        {/* lugar donde se encuentra */}
        <FormControl mt="4px">
          <FormLabel>¿En qué ciudad te encuentras?</FormLabel>
          <Input type="text" placeholder="Ejemplo: Buenos Aires" />
        </FormControl>
      </GridItem>

      <GridItem borderLeft="2px solid #6B7A8F" padding="12px">
        <Center marginBlockEnd="14px">
          <Image src={googleCalendar} height="98" width="98" />
        </Center>

        <Box as={'span'}>Selecciona tus fechas</Box>

        <Stack marginBlockStart="18px" spacing="16px">
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
          />

          <Input
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
          />

          <Button colorScheme="blue" width="268px" type="submit">
            Buscar
          </Button>
        </Stack>
      </GridItem>
    </Grid>
  )
}
