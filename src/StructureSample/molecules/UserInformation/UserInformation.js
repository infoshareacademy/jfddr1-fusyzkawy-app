import React, { useState, useContext, cloneElement } from "react";
import {
  UserInformationStyled,
  ImageStyled,
  PStyled,
  ButtonStyled,
  HoverEffect,
} from "./UserInformationStyled";
import { UserData } from "../../../contexts/UserData";

function UserInformation(props) {
  const { accountData } = useContext(UserData);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const clickHandler = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <UserInformationStyled>
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
      <HoverEffect>
        <ButtonStyled onClick={clickHandler}>&dArr;</ButtonStyled>
      </HoverEffect>
      {isButtonClicked && cloneElement(props.children, { setIsButtonClicked })}
    </UserInformationStyled>
  );
}

export default UserInformation;
