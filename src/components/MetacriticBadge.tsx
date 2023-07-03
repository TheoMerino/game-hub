import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const MetacriticBadge = ({ score }: Props) => {
  const color = score > 80 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} pl={2} pr={2}>
      {score}
    </Badge>
  );
};

export default MetacriticBadge;
