import React from "react";
import Input from "../../atoms/Input";
import {
  UserCointainer,
  UserPhoto,
  DetailsContainer,
} from "./ProfileSettingsStyled";

function ProfileSettings({ user }) {
  const styleForLabel = {
    display: "inline-block",
    width: "120px",
    marginLeft: "20px",
  };
  const styleForInput = { margin: "10px auto" };

  return (
    <UserCointainer>
      <h2>Settings</h2>
      <UserPhoto>
        <img src={user.photo} width="150" height="200" alt="user"></img>
      </UserPhoto>
      <h3>Profile details</h3>
      <DetailsContainer>
        <Input
          title="Name: "
          defaultValue={user.name}
          type="text"
          style={styleForInput}
          labelStyle={styleForLabel}
        />
        <Input
          title="Username: "
          defaultValue={user.username}
          type="text"
          style={styleForInput}
          labelStyle={styleForLabel}
        />
        <Input
          title="Date of Birth:"
          defaultValue={user.dateOfBirth}
          type="date"
          style={styleForInput}
          labelStyle={styleForLabel}
        />
      </DetailsContainer>
      <h3>Contact info</h3>
      <DetailsContainer>
        <Input
          title="Phone:"
          defaultValue={user.phone}
          type="tel"
          style={styleForInput}
          labelStyle={styleForLabel}
        />
        <Input
          title="Email: "
          value={user.email}
          type="email"
          style={styleForInput}
          labelStyle={styleForLabel}
          readOnly={true}
        />
      </DetailsContainer>
    </UserCointainer>
  );
}

export default ProfileSettings;
