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
import { useHistory } from "react-router-dom";

function UserInformation() {
  const history = useHistory();
  const { displayToast, accountData } = useContext(UserData);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [showAccountSettings, setShowAccountSettings] = useState(false);

  console.log(accountData);

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
        src={
          accountData.img !== undefined
            ? accountData.img
            : "https://metabiomedamericas.com/wp-content/uploads/2018/05/facebook-avatar-1024x645.jpg"
        }
        alt="user's avatar"
      />
      <PStyled>
        {accountData.nick !== undefined ? accountData.nick : "Username"}
      </PStyled>
      <HoverEffect>
        <ButtonStyled onClick={clickHandler}>&dArr;</ButtonStyled>
      </HoverEffect>
      {isButtonClicked && (
        <MenuStyled>
          <HoverEffect>
            <OptionStyled onClick={clickedSettings}>Your Account</OptionStyled>
            <OptionStyled
              onClick={() =>
                authSignOut(displayToast).then(() => {
                  history.push("/farewell/");
                  window.location.reload();
                })
              }
            >
              Log Out
            </OptionStyled>
          </HoverEffect>
        </MenuStyled>
      )}
      {showAccountSettings && (
        <ProfileSettings onCancel={() => setShowAccountSettings(false)} />
      )}
    </UserInformationStyled>
  );
}

export default UserInformation;
