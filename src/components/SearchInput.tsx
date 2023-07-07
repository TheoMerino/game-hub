import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, FormEventHandler, useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (search: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (ref.current?.value) {
      onSearch(ref.current.value);
      ref.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <BsSearch color="gray" />
        </InputLeftElement>
        <Input
          ref={ref}
          borderRadius={"3xl"}
          variant={"filled"}
          type="text"
          placeholder="Search games..."
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
