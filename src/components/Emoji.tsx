import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojis: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "ok", boxSize: "20px" },
    4: { src: thumbsUp, alt: "good", boxSize: "20px" },
    5: { src: bullsEye, alt: "awesome", boxSize: "30px" },
  };

  return rating > 2 && <Image {...emojis[rating]} />;
};

export default Emoji;
