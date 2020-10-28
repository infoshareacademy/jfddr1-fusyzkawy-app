import React from "react";
import {
  Wrapper,
  AccountContainer,
  Title,
  DetailsContainer,
  UserData,
  Input,
  Label,
  UserPhoto,
  TitleImg,
  Img,
  UploadInput,
  RemoveButton,
  Footer,
  AcceptButton,
  CancelButton,
  Exit,
} from "./ProfileSettingsStyled";
import DefaultUserImg from "../../../img/UserIcon.svg";

const ProfileSettings = ({ onCancel }) => {
  return (
    <Wrapper>
      <AccountContainer>
        <Title>Your Profil</Title>
        <DetailsContainer>
          <UserData>
            <Label htmlFor="name">Full Name</Label>
            <Input
              title="name"
              name="name"
              type="text"
              placeholder="Full Name"
            />
            <Label htmlFor="nick">Nick</Label>
            <Input title="nick" name="nick" type="text" placeholder="Nick" />
            <Label htmlFor="dateofbirth">Date of Birth</Label>
            <Input title="dateofbirth" name="dateofbirth" type="date" />
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              title="phone"
              name="phone"
              type="tel"
              placeholder="Phone Number"
            />
            <Label htmlFor="email">Email</Label>
            <Input
              title="email"
              name="email"
              type="email"
              placeholder="Email"
              readOnly
            />
          </UserData>
          <UserPhoto>
            <TitleImg>Profile Photo</TitleImg>
            <Img src={DefaultUserImg} alt="User"></Img>
            <UploadInput
              title="photo"
              name="photo"
              type="file"
              placeholder="Upload an Image"
            />
            <RemoveButton>Remove Photo</RemoveButton>
          </UserPhoto>
        </DetailsContainer>
        <Footer>
          <AcceptButton>Save Changes</AcceptButton>
          <CancelButton>Cancel</CancelButton>
        </Footer>
        <Exit onClick={onCancel}>&#x02A2F;</Exit>
      </AccountContainer>
    </Wrapper>
  );
};

export default ProfileSettings;
