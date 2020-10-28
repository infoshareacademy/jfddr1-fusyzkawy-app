import React, { useContext, useState, useEffect } from "react";
import {
  Wrapper,
  AccountContainer,
  Title,
  DetailsContainer,
  UserInfo,
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
import { UserData } from "../../../contexts/UserData";
import { changeAccountData } from "../../../Firebase/firestore/accountDataActions";

const ProfileSettings = () => {
  const emptyUserInfo = {
    name: "",
    nick: "",
    dateofbirth: "",
    phone: "",
    email: "",
    img: "",
  };
  const { userUid, accountData } = useContext(UserData);
  const [userInfo, setUserInfo] = useState(emptyUserInfo);
  useEffect(() => {
    if (Object.keys(accountData).length !== 0) {
      setUserInfo(accountData);
    }
  }, [accountData]);

  const handleChange = e => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const changeData = e => {
    e.preventDefault();
    changeAccountData(userUid, userInfo);
  };
  return (
    <Wrapper>
      <AccountContainer>
        <Title>Your Profil</Title>
        <DetailsContainer>
          <UserInfo>
            <Label htmlFor="name">Full Name</Label>
            <Input
              title="name"
              name="name"
              type="text"
              placeholder="Full Name"
              value={userInfo.name}
              onChange={event => handleChange(event)}
            />
            <Label htmlFor="nick">Nick</Label>
            <Input
              title="nick"
              name="nick"
              type="text"
              placeholder="Nick"
              value={userInfo.nick}
              onChange={event => handleChange(event)}
            />
            <Label htmlFor="dateofbirth">Date of Birth</Label>
            <Input
              title="dateofbirth"
              name="dateofbirth"
              type="date"
              value={userInfo.dateofbirth}
              onChange={event => handleChange(event)}
            />
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              title="phone"
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={userInfo.phone}
              onChange={event => handleChange(event)}
            />
            <Label htmlFor="email">Email</Label>
            <Input
              title="email"
              name="email"
              type="email"
              placeholder="Email"
              value={userInfo.email}
              readOnly
            />
          </UserInfo>
          <UserPhoto>
            <TitleImg>Profile Photo</TitleImg>
            <Img src={userInfo.img || DefaultUserImg} alt="User"></Img>
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
          <AcceptButton
            onClick={e => {
              changeData(e);
            }}
          >
            Save Changes
          </AcceptButton>
          <CancelButton>Cancel</CancelButton>
        </Footer>
        <Exit>&#x02A2F;</Exit>
      </AccountContainer>
    </Wrapper>
  );
};

export default ProfileSettings;
