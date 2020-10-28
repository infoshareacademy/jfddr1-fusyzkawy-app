import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.6);
`;

export const AccountContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 35px;
  font-size: 1.5rem;
  background-color: var(--basic-white);
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.18),
    0 9px 46px 8px rgba(0, 0, 0, 0.16), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
`;
export const Title = styled.h2`
  margin: 12px 0 35px;
  font-size: 3.8rem;
  font-weight: bold;
  font-style: italic;
  text-align: center;
  text-transform: capitalize;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
  line-height: 3.5rem;
  color: var(--basic-navy-blue);
`;
export const DetailsContainer = styled.div`
  display: flex;
  gap: 35px;
`;

export const UserInfo = styled.div`
  width: 400px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 25px;
  border-radius: 3px;
  border: 1.5px solid var(--basic-navy-blue);
  padding: 8px 12px;
  background-color: transparent;
  font-size: 2.2rem;
  font-weight: bold;
  color: var(--basic-navy-blue);
  cursor: pointer;
  &:active {
    box-shadow: 0px 0px 5px 0.5px var(--basic-navy-blue);
    outline: none;
  }
  &:focus {
    box-shadow: 0px 0px 5px 0.5px var(--basic-navy-blue);
    outline: none;
  }
  &::-webkit-input-placeholder {
    font-weight: normal;
    color: rgba(25, 49, 64, 0.8);
  }
`;
export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  background-color: transparent;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: left;
  color: var(--basic-navy-blue);
`;
export const UserPhoto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const TitleImg = styled.h3`
  align-self: flex-start;
  margin-bottom: 10px;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: left;
  color: var(--basic-navy-blue);
`;
export const Img = styled.img`
  display: block;
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
`;
export const UploadInput = styled.input`
  display: block;
  margin: 8px 0 12px;
  padding: 0;
  border-radius: 3px;
  border: 1.5px solid var(--basic-navy-blue);
  width: 200px;
  height: 4rem;
  color: transparent;
  font-size: 0px;
  outline: none;
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  &::before {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 3px;
    content: "Upload an Image";
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    background-color: transparent;
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
    line-height: 4rem;
    color: var(--basic-navy-blue);
    cursor: pointer;
  }
  &:hover {
    border: none;
    outline: 0;
  }
  &:hover::before {
    border: none;
    background-color: var(--basic-navy-blue);
    color: var(--basic-white);
    outline: none;
  }
  &:active {
    border: none;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.8);
    background: transparent;
    outline: 0;
  }
  &:active::before {
    border: none;
    background-color: var(--basic-navy-blue);
    color: var(--basic-white);
    outline: none;
  }
  &:focus {
    outline: none;
  }
  &:focus::before {
    border: none;
    outline: none;
  }
`;
export const RemoveButton = styled.button`
  border: none;
  box-shadow: none;
  background-color: transparent;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 2.2rem;
  color: var(--basic-navy-blue);
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid var(--basic-navy-blue);
    outline: none;
  }
  &:active {
    border-bottom: 2px solid var(--basic-navy-blue);
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;
export const Footer = styled.footer`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  margin-top: 25px;
`;
export const AcceptButton = styled.button`
  border: 1.5px solid transparent;
  border-radius: 3px;
  padding: 0 12px;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.4);
  background-color: var(--sign-green);
  font-size: 2.2rem;
  font-weight: bold;
  line-height: 4.2rem;
  color: var(--sign-gray);
  cursor: pointer;
  &:hover {
    background-color: rgba(3, 166, 14, 0.9);
    outline: none;
  }
  &:active {
    background-color: var(--sign-green);
    outline: none;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.8);
  }
  &:focus {
    outline: none;
  }
`;
export const CancelButton = styled.button`
  border: 1.5px solid var(--basic-navy-blue);
  border-radius: 3px;
  padding: 0 12px;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.4);
  background-color: transparent;
  font-size: 2.2rem;
  font-weight: bold;
  line-height: 4.2rem;
  color: var(--basic-navy-blue);
  cursor: pointer;
  &:hover {
    background-color: var(--basic-navy-blue);
    color: var(--basic-white);
    outline: none;
  }
  &:active {
    background-color: var(--basic-navy-blue);
    color: var(--basic-white);
    outline: none;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.8);
  }
  &:focus {
    outline: none;
  }
`;
export const Exit = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  border: none;
  background-color: transparent;
  font-size: 3.5rem;
  font-weight: bold;
  text-transform: capitalize;
  line-height: 5rem;
  color: var(--basic-navy-blue);
  cursor: pointer;
  &:active {
    border: none;
    outline: none;
    font-size: 4rem;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;
