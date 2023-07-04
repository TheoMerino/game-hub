import { Platform } from "../hooks/useGame";
import {
  BsPlaystation,
  BsXbox,
  BsNintendoSwitch,
  BsAndroid2,
  BsWindows,
  BsApple,
} from "react-icons/bs";
import { FaLinux } from "react-icons/fa";
import { IconType } from "react-icons";
import { HStack, Icon, VStack } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    playstation: BsPlaystation,
    xbox: BsXbox,
    nintendo: BsNintendoSwitch,
    android: BsAndroid2,
    pc: BsWindows,
    mac: BsApple,
    linux: FaLinux,
  };
  return (
    <HStack spacing={"5px"}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          fontSize={"small"}
          color={"gray.500"}
        />
      ))}
      ;
    </HStack>
  );
};

export default PlatformIconList;
