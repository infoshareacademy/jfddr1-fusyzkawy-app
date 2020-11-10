import React from "react";
import Logo from "../../../img/logo-krab_without.png";
import { AsideStyled, LogoStyled, ImgStyled } from "./AsideStyled";
import AsideTaskList from "./AsideTaskList/AsideTaskList";
import AsideTimer from "./AsideTimer/AsideTimer";

const Aside = () => {
  return (
    <AsideStyled>
      <LogoStyled href="/jfddr1-fusyzkawy-app/tasks/">
        <ImgStyled src={Logo} alt="logo of KRAB App" />
      </LogoStyled>
      <AsideTaskList />
      <AsideTimer />
    </AsideStyled>
  );
};

export default Aside;
