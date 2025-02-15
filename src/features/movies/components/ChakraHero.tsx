import {
  Box,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react"
import { FiSearch } from "react-icons/fi"

type ChakraProps = {
  onSearch?: (value: string) => void
  value?: string
}

export const ChakraHero = ({
  onSearch,
  value,
}: ChakraProps) => {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      maxW={"container.sm"}
      mt={"80px"}
    >
      <Text
        as="h4"
        fontSize={"xs"}
        color={"purple.200"}
        fontWeight="normal"
      >
        MaileHereko
      </Text>
      <Text as="h1" fontSize={"7xl"} fontWeight="bold">
        Movies
      </Text>
      <FormControl mb={12}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FiSearch />}
          />
          <Input
            id="search"
            type="text"
            size={"lg"}
            colorScheme="purple"
            placeholder="Search Movies or TV Shows"
            variant={"outline"}
            _placeholder={{
              color: "gray.700",
              fontSize: "sm",
            }}
            onChange={e => {
              onSearch && onSearch(e.target.value)
            }}
            value={value}
          />
        </InputGroup>
      </FormControl>
    </Box>
  )
}
