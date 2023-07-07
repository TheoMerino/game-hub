import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <BsSearch color="gray" />
      </InputLeftElement>
      <Input
        borderRadius={"3xl"}
        variant={"filled"}
        type="text"
        placeholder="Search games..."
      />
    </InputGroup>
  );
};

export default SearchInput;
