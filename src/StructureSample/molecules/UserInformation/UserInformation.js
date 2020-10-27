import React, { useState } from "react";
import {
  UserInformationStyled,
  ImageStyled,
  PStyled,
  ButtonStyled,
  MenuStyled,
  OptionStyled,
  HoverEffect,
} from "./UserInformationStyled";
import { authSignOut } from "../../../Firebase/auth/auth";

function UserInformation() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const clickHandler = () => {
    setIsButtonClicked(true);
    document.addEventListener("click", closeMenu);
  };
  function closeMenu() {
    setIsButtonClicked(false);
    document.removeEventListener("click", closeMenu);
  }
  const firstOptionHandler = () => {
    console.log("1");
  };

  return (
    <UserInformationStyled>
      <ImageStyled
        src="https://metabiomedamericas.com/wp-content/uploads/2018/05/facebook-avatar-1024x645.jpg"
        alt="user's avatar"
      />
      <PStyled>Username</PStyled>
      <HoverEffect>
        <ButtonStyled onClick={clickHandler}>v</ButtonStyled>
      </HoverEffect>
      {isButtonClicked && (
        <MenuStyled>
          <HoverEffect>
            <OptionStyled onClick={firstOptionHandler}>
              Your Account
            </OptionStyled>
            <OptionStyled onClick={authSignOut}>Log Out</OptionStyled>
          </HoverEffect>
        </MenuStyled>
      )}
    </UserInformationStyled>
  );
}

export default UserInformation;
