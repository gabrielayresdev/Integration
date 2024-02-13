import React from "react";
import { AnchorText, Container, GhostText, Underline } from "./styles";
import { useNavigation } from "@react-navigation/native";
interface TwoLineAnchorInterface {
  firstLine: string;
  secondLine: string;
  href: string;
}

const TwoLineAnchor = ({
  firstLine,
  secondLine,
  href,
}: TwoLineAnchorInterface) => {
  const navigation = useNavigation();
  return (
    <Container>
      <GhostText>{firstLine}</GhostText>
      {/* //! Solve href error */}
      <AnchorText onPress={() => navigation.navigate(href)}>
        {secondLine}
        <Underline />
      </AnchorText>
    </Container>
  );
};

export default TwoLineAnchor;
