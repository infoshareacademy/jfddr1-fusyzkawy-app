import React, { useContext, useState, useEffect } from "react";
import {
  Wrapper,
  AccountContainer,
  Title,
  DetailsContainer,
  UserInfo,
  UserPhoto,
  TitleImg,
  Img,
  UploadWrapper,
  UploadInput,
  UploadName,
  Alert,
  AddButton,
  RemoveButton,
  Footer,
  AcceptButton,
  CancelButton,
  Exit,
} from "./ProfileSettingsStyled";
import SingleInfo from "./SingleInfo";
import EmailInfo from "./EmailInfo";
import DefaultUserImg from "../../../img/UserIcon.svg";
import { UserData } from "../../../contexts/UserData";
import { changeAccountData } from "../../../Firebase/firestore/accountDataActions";
import {
  uploadUserImg,
  getUserImg,
  deleteUserImg,
} from "../../../Firebase/storage/accountImgActions";

const ProfileSettings = ({ onCancel }) => {
  const emptyUserInfo = {
    name: "",
    nick: "",
    dateofbirth: "",
    phone: "",
    email: "",
    img: "",
  };
  const initUploadImg = { img: "", name: "No file chosen" };
  const initAlertData = { text: "", succes: false };
  const { userUid, accountData } = useContext(UserData);
  const [userInfo, setUserInfo] = useState(emptyUserInfo);
  const [uploadImgData, setUploadImgData] = useState(initUploadImg);
  const [alertData, setAlertData] = useState(initAlertData);

  useEffect(() => {
    if (Object.keys(accountData).length !== 0) {
      setUserInfo(accountData);
    }
  }, [accountData]);

  const handleChange = e => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleAddFile = e => {
    setUploadImgData({ img: e.target.files[0], name: e.target.files[0].name });
    setAlertData(initAlertData);
  };

  const getImg = path => {
    getUserImg(path)
      .then(url => changeAccountData(userUid, { img: url }))
      .then(() => {
        setAlertData({ text: "Upload Photo Successful!", success: true });
      })
      .catch(error => {
        setAlertData({ text: error.message, success: false });
      });
  };

  const uploadImg = e => {
    e.preventDefault();
    if (uploadImgData.img) {
      uploadUserImg(userUid, uploadImgData.img)
        .then(snap => {
          getImg(snap.ref.fullPath);
          setUploadImgData({ img: "", name: "No file chosen" });
        })
        .catch(() => setAlertData({ text: "Wrong", success: false }));
    } else {
      setAlertData({ text: "Please add new photo", success: false });
    }
  };

  const deleteImg = e => {
    e.preventDefault();
    if (accountData.img) {
      deleteUserImg(userUid)
        .then(() => {
          changeAccountData(userUid, { img: "" });
          setAlertData({ text: "Remove Photo Successful!", success: true });
        })
        .catch(error => {
          setAlertData({ text: error.message, success: false });
        });
    } else {
      setAlertData({ text: "Don't have a profile photo", success: false });
    }
  };

  const changeData = e => {
    e.preventDefault();
    changeAccountData(userUid, userInfo);
    onCancel();
  };

  return (
    <Wrapper>
      <AccountContainer>
        <Title>Your Profile</Title>
        <DetailsContainer>
          <UserInfo>
            <SingleInfo
              name="name"
              type="text"
              placeholder="Full Name"
              value={userInfo.name}
              handleChange={handleChange}
            />
            <SingleInfo
              name="nick"
              type="text"
              placeholder="Nick"
              value={userInfo.nick}
              handleChange={handleChange}
            />
            <SingleInfo
              name="dateofbirth"
              type="date"
              placeholder="Date of Birth"
              value={userInfo.dateofbirth}
              handleChange={handleChange}
            />
            <SingleInfo
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={userInfo.phone}
              handleChange={handleChange}
            />
            <EmailInfo
              type="email"
              placeholder="Email"
              value={userInfo.email}
            />
          </UserInfo>
          <UserPhoto>
            <TitleImg>Profile Photo</TitleImg>
            <Img src={userInfo.img || DefaultUserImg} alt="User"></Img>
            <Alert success={alertData.success}>{alertData.text}</Alert>
            <UploadWrapper>
              <UploadInput
                title="img"
                name="img"
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={e => handleAddFile(e)}
              />
              <UploadName>{uploadImgData.name}</UploadName>
            </UploadWrapper>
            <AddButton onClick={event => uploadImg(event)}>
              Upload Photo
            </AddButton>
            <RemoveButton onClick={event => deleteImg(event)}>
              Remove Photo
            </RemoveButton>
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
          <CancelButton onClick={onCancel}>Cancel</CancelButton>
        </Footer>
        <Exit onClick={onCancel}>&#x02A2F;</Exit>
      </AccountContainer>
    </Wrapper>
  );
};

export default ProfileSettings;
