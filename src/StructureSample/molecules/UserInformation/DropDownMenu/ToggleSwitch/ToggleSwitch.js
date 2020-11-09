import React, { useEffect, useContext } from "react";
import "./ToggleSwitch.css";
import { UserData } from "../../../../../contexts/UserData";

const ToggleSwitch = () => {
  const { isLightThemeOn, setIsLightThemeOn } = useContext(UserData);

  useEffect(() => {
    if (isLightThemeOn === true) {
      document.documentElement.style.setProperty(
        "--basic-navy-blue",
        "#4681a6"
      );
      document.documentElement.style.setProperty("--basic-blue", "#44aff2");
      document.documentElement.style.setProperty("--navy-blue-2", "#44aff2");
      document.documentElement.style.setProperty(
        "--basic-aside-shadow",
        "#02385A"
      );
    } else {
      document.documentElement.style.setProperty(
        "--basic-navy-blue",
        "#193140"
      );
      document.documentElement.style.setProperty("--basic-blue", "#254559");
      document.documentElement.style.setProperty("--navy-blue-2", "#254559");
      document.documentElement.style.setProperty(
        "--basic-aside-shadow",
        "#091116"
      );
    }
  }, [isLightThemeOn]);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isLightThemeOn}
        onChange={() => setIsLightThemeOn(!isLightThemeOn)}
      />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleSwitch;
