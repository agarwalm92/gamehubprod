import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort
      </MenuButton>
      <MenuList>
        {/* {data.map((p) => (
          <MenuItem onClick={() => onSelectedSort(p)} key={p.id}>
            {p.name}
          </MenuItem>
        ))} */}
        <MenuItem>1</MenuItem>
        <MenuItem>11</MenuItem>
        <MenuItem>13</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
