import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedSort: (sortOrder: string) => void; //function declaration
  selectedSortOrder: string;
}

const SortSelector = ({ onSelectedSort, selectedSortOrder }: Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Avg rating" },
  ];

  const currentSortOrder = sortOrder.find((i) => i.value == selectedSortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedSortOrder != null
          ? "Sort: " + currentSortOrder?.label
          : "Sort: Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((o) => (
          <MenuItem onClick={() => onSelectedSort(o.value)} key={o.value}>
            {o.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
