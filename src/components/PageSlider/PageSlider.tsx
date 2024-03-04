import React from "react";
import { Container, Slider } from "./styles";

interface PageSliderInterface extends React.PropsWithChildren {
  page: number;
}

const PageSlider = ({ children, page }: PageSliderInterface) => {
  return (
    <Container page={page}>
      <Slider page={page}>{children}</Slider>
    </Container>
  );
};

export default PageSlider;
