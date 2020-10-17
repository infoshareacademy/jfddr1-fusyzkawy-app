import React from "react";
import Input from "../atoms/Input";
import styled from "styled-components";

const UserCointainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 450px;
  margin: 15px;
  padding: 20px;
`;

const UserPhoto = styled.div`
  height: 200px;
  width: 150px;
  margin-left: 200px;
  border-radius: 40px;
  overflow: hidden;
`;

function ProfileSettings({ user }) {
  return (
    <UserCointainer>
      <h2>Settings</h2>
      <UserPhoto>
        <img src={user.photo} width="150" height="200"></img>
      </UserPhoto>
      <div>
        <h3>Profile details</h3>
        <Input title="Name " value={user.name} type="text" isRequired={true} />
        <Input
          title="Username: "
          value={user.username}
          type="text"
          isRequired={true}
        />
        <Input
          title="Date of Birth:"
          value={user.dateOfBirth}
          type="date"
          isRequired={true}
        />
      </div>
      <div>
        <h3>Contact info</h3>
        <Input title="Phone:" value={user.phone} type="tel" isRequired={true} />
        <Input
          title="Email: "
          value={user.email}
          type="email"
          isRequired={true}
        />
      </div>
    </UserCointainer>
  );
}

export default ProfileSettings;
