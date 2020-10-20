import React from "react";
import Input from "../atoms/Input";
import styled from "styled-components";

const UserCointainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 450px;
  margin: 25px;
  padding: 20px;
  font-size: 1.5rem;
`;

const UserPhoto = styled.div`
  height: 200px;
  width: 150px;
  margin: 20px auto 20px 200px;
  border-radius: 40px;
  overflow: hidden;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
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
          value={user.name}
          type="text"
          style={styleForInput}
          labelStyle={styleForLabel}
        />
        <Input
          title="Username: "
          value={user.username}
          type="text"
          style={styleForInput}
          labelStyle={styleForLabel}
        />
        <Input
          title="Date of Birth:"
          value={user.dateOfBirth}
          type="date"
          style={styleForInput}
          labelStyle={styleForLabel}
        />
      </DetailsContainer>
      <h3>Contact info</h3>
      <DetailsContainer>
        <Input
          title="Phone:"
          value={user.phone}
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
        />
      </DetailsContainer>
    </UserCointainer>
  );
}

export default ProfileSettings;
