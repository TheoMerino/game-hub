import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

export interface Sort {
  value: string;
  label: string;
}
interface Props {
  selectedSort?: Sort | null;
  onSort: (sort: Sort) => void;
}
const SortSelector = ({ selectedSort, onSort }: Props) => {
  const sortTypes: Sort[] = [
    { value: "name", label: "Name" },
    { value: "release", label: "Release Date" },
    { value: "-added", label: "Date added" },
    { value: "-created", label: "Date created" },
    { value: "-updated", label: "Date updated" },
    { value: "-rating", label: "Rating" },
    { value: "-metacritic", label: "Popularity" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Order By {selectedSort?.label && ` : ${selectedSort.label}`}
      </MenuButton>
      <MenuList>
        {sortTypes.map((sort) => (
          <MenuItem key={sort.value} onClick={() => onSort(sort)}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
