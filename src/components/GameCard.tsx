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
    <Card width="200px" borderRadius={10} overflow="hidden">
      <Image src={CroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justify="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((e) => e.platform)}
          />
          <CriticScorecard score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
