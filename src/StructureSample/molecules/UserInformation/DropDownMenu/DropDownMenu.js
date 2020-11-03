import React, { useContext, useState, useEffect, useRef } from "react";
import {
  MenuStyled,
  OptionStyled,
  HoverEffect,
  Icon,
} from "../UserInformationStyled";
import ProfileSettings from "../../ProfileSettings/ProfileSettings";
import { authSignOut } from "../../../../Firebase/auth/auth";
import { UserData } from "../../../../contexts/UserData";
import { useHistory } from "react-router-dom";
import { ReactComponent as LeftArrow } from "../../../../img/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../../../img/right-arrow.svg";
import { CSSTransition } from "react-transition-group";

const DropDownMenu = props => {
  const menuRef = useRef();
  useEffect(() => {
    const handler = event => {
      if (!menuRef.current.contains(event.target)) {
        props.setIsButtonClicked(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const { displayToast } = useContext(UserData);
  const history = useHistory();

  const [activeMenu, setActiveMenu] = useState("main");
  const [showAccountSettings, setShowAccountSettings] = useState(false);

  const DropDownItem = props => {
    return (
      <OptionStyled
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <Icon>{props.leftIcon}</Icon>
        {props.children}
        <Icon>{props.rightIcon}</Icon>
      </OptionStyled>
    );
  };
  return (
    <MenuStyled ref={menuRef}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
      >
        <div className="menu">
          <HoverEffect>
            <DropDownItem leftIcon={<LeftArrow />} goToMenu={"settings"}>
              Your Account
            </DropDownItem>
            <OptionStyled
              style={{ justifyContent: "center" }}
              onClick={() =>
                authSignOut(displayToast).then(() => {
                  history.push("/farewell/");
                })
              }
            >
              Log Out
            </OptionStyled>
          </HoverEffect>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <HoverEffect>
            <DropDownItem rightIcon={<RightArrow />} goToMenu="main">
              Go back
            </DropDownItem>
            <OptionStyled
              style={{ justifyContent: "center" }}
              onClick={() => {
                setShowAccountSettings(true);
              }}
            >
              Account settings
            </OptionStyled>
            <DropDownItem>Change Theme</DropDownItem>
          </HoverEffect>
        </div>
      </CSSTransition>
      {showAccountSettings && (
        <ProfileSettings onCancel={() => setShowAccountSettings(false)} />
      )}
    </MenuStyled>
  );
};

export default DropDownMenu;
