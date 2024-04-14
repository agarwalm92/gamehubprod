import { List, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem paddingY="5px">
        <Skeleton>
          <SkeletonText />
        </Skeleton>
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
