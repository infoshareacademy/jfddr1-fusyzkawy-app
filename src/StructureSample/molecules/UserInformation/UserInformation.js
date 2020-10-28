import React, { useState, useContext } from "react";
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
import { UserData } from "../../../contexts/UserData";
import ProfileSettings from "../ProfileSettings/ProfileSettings";

function UserInformation() {
  const { displayToast } = useContext(UserData);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [showAccountSettings, setShowAccountSettings] = useState(false);

  const clickHandler = () => {
    setIsButtonClicked(true);
    document.addEventListener("click", closeMenu);
  };
  const clickedSettings = () => {
    setShowAccountSettings(true);
  };
  function closeMenu() {
    setIsButtonClicked(false);
    document.removeEventListener("click", closeMenu);
  }

  return (
    <UserInformationStyled>
      <ImageStyled
        src="https://metabiomedamericas.com/wp-content/uploads/2018/05/facebook-avatar-1024x645.jpg"
        alt="user's avatar"
      />
      <PStyled>Username</PStyled>
      <HoverEffect>
        <ButtonStyled onClick={clickHandler}>&dArr;</ButtonStyled>
      </HoverEffect>
      {isButtonClicked && (
        <MenuStyled>
          <HoverEffect>
            <OptionStyled onClick={clickedSettings}>Your Account</OptionStyled>
            <OptionStyled onClick={() => authSignOut(displayToast)}>
              Log Out
            </OptionStyled>
          </HoverEffect>
        </MenuStyled>
      )}
      {showAccountSettings && <ProfileSettings />}
    </UserInformationStyled>
  );
}

export default UserInformation;
