import { Card, Heading, CardBody, Image, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGetGames";
import PlatformIconList from "./PlatformIconList";
import CriticScorecard from "./CriticScorecard";
import CroppedImageUrl from "../services/CroppedImageUrl";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={CroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justify="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={
              game.parent_platforms != null
                ? game.parent_platforms.map((e) => e.platform)
                : []
            }
          />
          {/* <PlatformIconList
            platforms={game.parent_platforms.map((e) => e.platform)}
          /> */}
          <CriticScorecard score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
