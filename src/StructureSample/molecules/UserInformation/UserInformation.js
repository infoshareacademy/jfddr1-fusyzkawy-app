import React, { useState, useContext, cloneElement } from "react";
import {
  UserInformationStyled,
  ImageStyled,
  PStyled,
  ButtonStyled,
  HoverEffect,
  ChevronStyled,
} from "./UserInformationStyled";
import { UserData } from "../../../contexts/UserData";

import Chevron from "../../../img/arrow-down.svg";

function UserInformation(props) {
  const { accountData } = useContext(UserData);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const clickHandler = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <UserInformationStyled>
      <HoverEffect>
        <ButtonStyled onClick={clickHandler}>
          <ImageStyled
            src={
              accountData.img !== ""
                ? accountData.img
                : "https://metabiomedamericas.com/wp-content/uploads/2018/05/facebook-avatar-1024x645.jpg"
            }
            alt="user's avatar"
          />
          <PStyled>
            {accountData.nick !== "" ? accountData.nick : "Username"}
          </PStyled>
          <ChevronStyled src={Chevron} alt="" />
        </ButtonStyled>
      </HoverEffect>
      {isButtonClicked && cloneElement(props.children, { setIsButtonClicked })}
    </UserInformationStyled>
  );
}

export default UserInformation;
