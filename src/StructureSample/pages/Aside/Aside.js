import React from "react";
import Logo from "../../../img/logo-krab_without.png";
import { AsideStyled, LogoStyled } from "./AsideStyled";
import AsideTaskList from "./AsideTaskList/AsideTaskList";
import AsideTimer from "./AsideTimer/AsideTimer";

const Aside = () => {
  return (
    <AsideStyled>
      <a href="/tasks/">
        <LogoStyled src={Logo} alt="logo of KRAB App" />
      </a>

      <AsideTaskList />
      <AsideTimer />
    </AsideStyled>
  );
};

export default Aside;
