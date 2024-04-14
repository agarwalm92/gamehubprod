import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGetGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const IconList: { [key: string]: IconType } = {
    //Typescrpt: index signature [key:dataType]:Type
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
    andriod: FaAndroid,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((p) => (
        <Icon as={IconList[p.slug]} key={p.id} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
