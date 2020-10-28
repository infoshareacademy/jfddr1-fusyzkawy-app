import React, { useState, useContext, useEffect } from "react";
import {
  UserInformationStyled,
  ImageStyled,
  PStyled,
  ButtonStyled,
  MenuStyled,
  OptionStyled,
  OuterModal,
  HoverEffect,
} from "./UserInformationStyled";
import { authSignOut } from "../../../Firebase/auth/auth";
import { UserData } from "../../../contexts/UserData";
import ProfileSettings from "../ProfileSettings/ProfileSettings";
import { Rnd } from "react-rnd";

function UserInformation() {
  const { displayToast } = useContext(UserData);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [showAccountSettings, setShowAccountSettings] = useState(false);

  const clickHandler = () => {
    setIsButtonClicked(true);
    document.addEventListener("click", closeMenu);
    window.addEventListener("resize", closeMenu);
  };
  const clickedSettings = () => {
    setShowAccountSettings(true);
  };
  function closeMenu() {
    setIsButtonClicked(false);
    document.removeEventListener("click", closeMenu);
    window.removeEventListener("resize", closeMenu);
  }
  const [menuPoint, setMenuPoint] = useState({
    x: window.innerWidth,
    y: 0,
  });
  const [ww, setWw] = useState(0);
  window.addEventListener("resize", () => {
    setWw(window.innerWidth);
  });

  useEffect(() => {
    const updateCoordinates = () => {
      setMenuPoint({
        x: ww,
        y: 0,
      });
    };
    return () => {
      updateCoordinates();
    };
  }, [ww]);

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
        <OuterModal>
          <Rnd
            default={{
              x: menuPoint.x - 150,
              y: 100,
              width: 150,
              height: 136,
            }}
            disableDragging={true}
            enableResizing={false}
          >
            <MenuStyled>
              <HoverEffect>
                <OptionStyled onClick={clickedSettings}>
                  Your Account
                </OptionStyled>
                <OptionStyled onClick={() => authSignOut(displayToast)}>
                  Log Out
                </OptionStyled>
              </HoverEffect>
            </MenuStyled>
          </Rnd>
        </OuterModal>
      )}
      {showAccountSettings && <ProfileSettings />}
    </UserInformationStyled>
  );
}

export default UserInformation;
