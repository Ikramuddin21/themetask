import React from "react";
import Carousel from "../Carousel/Carousel";
import Certificate from "../Certificate/Certificate";
import Cryptocurrency from "../Cryptocurrency/Cryptocurrency";
import Game from "../Game/Game";
import GraphicTemplate from "../GraphicTemplate/GraphicTemplate";
import SocialMedia from "../SocialMedia/SocialMedia";
import Themetask from "../Themetask/Themetask";
const Home = () => {
  return (
    <>
      <Carousel />
      <Themetask />
      <SocialMedia />
      <Certificate />
      <GraphicTemplate />
      <Game />
      <Cryptocurrency />
    </>
  );
};

export default Home;
