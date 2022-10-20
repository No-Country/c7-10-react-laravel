import { Box, Flex, Select } from '@chakra-ui/react'
import { Breadcrumb } from '../../components/Breadcrumb'
import { SearchItem } from '../../components/Search/SearchItem'

export const SearchPage = () => {
  return (
    <>
      <Breadcrumb title="Resultados de búsqueda" />
      <Box borderBlockEnd="2px solid #82A7BF">
        <Flex
          alignItems="center"
          fontSize="1.25rem"
          h="50px"
          justify="space-between"
          margin="auto"
          maxWidth="960px"
        >
          <Box as={'span'}>resultados para tu búsqueda</Box>
          <Select placeholder="Ordenar por" w="260px" borderColor="#82A7BF">
            <option value="option1">Cercania</option>
            <option value="option2">Review</option>
            <option value="option3">Precio: mayor a menor</option>
            <option value="option3">Precio: menor a mayor</option>
          </Select>
        </Flex>
      </Box>
      {/* serch content */}
      <Box mt="62px">
        {/* search items */}
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
      </Box>
    </>
  )
}
