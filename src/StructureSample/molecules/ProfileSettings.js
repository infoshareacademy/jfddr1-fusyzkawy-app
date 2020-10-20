import React from "react";
import Input from "../atoms/Input";
import styled from "styled-components";

const UserCointainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  margin: 25px;
  padding: 20px;
  font-size: 1.5rem;
  background-color: var(--basic-white);
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.18),
    0 9px 46px 8px rgba(0, 0, 0, 0.16), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
`;

const UserPhoto = styled.div`
  height: 200px;
  width: 150px;
  margin: 20px auto 20px 200px;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.1),
    0 9px 46px 8px rgba(0, 0, 0, 0.08), 0 11px 15px -7px rgba(0, 0, 0, 0.11);
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 10px;
`;

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
