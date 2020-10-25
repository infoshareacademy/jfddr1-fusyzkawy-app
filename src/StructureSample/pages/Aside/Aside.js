import React from "react";
import Logo from "../../../img/logo-krab_without.png";
import { AsideStyled, LogoStyled } from "./AsideStyled";
import AsideTaskList from "./AsideTaskList/AsideTaskList";
import AsideTimer from "./AsideTimer/AsideTimer";

const Aside = () => {
  return (
    <AsideStyled>
      <LogoStyled src={Logo} alt="logo of KRAB App" />
      <AsideTaskList />
      <AsideTimer />
    </AsideStyled>
  );
};

export default Aside;
