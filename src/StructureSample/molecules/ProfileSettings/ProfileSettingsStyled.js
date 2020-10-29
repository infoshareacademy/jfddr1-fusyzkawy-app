import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
`;

export const AccountContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px;
  background-color: var(--basic-white);
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.18),
    0 9px 46px 8px rgba(0, 0, 0, 0.16), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
`;
export const Title = styled.h2`
  margin: 10px 0 25px;
  font-size: 2.6rem;
  font-weight: bold;
  font-style: italic;
  text-align: center;
  text-transform: capitalize;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
  line-height: 3.2rem;
  color: var(--basic-navy-blue);
`;
export const DetailsContainer = styled.div`
  display: flex;
  gap: 25px;
`;

export const UserInfo = styled.div`
  width: 280px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 3px;
  border: 1.5px solid var(--basic-navy-blue);
  padding: 3px 10px;
  background-color: transparent;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 2.8rem;
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
`;

export const EmailInput = styled(Input)`
  cursor: auto;
  &:active {
    box-shadow: none;
  }
  &:focus {
    box-shadow: none;
  }
  &::-webkit-input-placeholder {
    font-weight: normal;
    color: rgba(25, 49, 64, 0.8);
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  background-color: transparent;
  font-size: 1.6rem;
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
  margin-bottom: 5px;
  font-size: 1.6rem;
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

export const Alert = styled.p.attrs(props => ({
  color: props.success ? "var(--sign-green)" : "rgba(255, 0, 0, 1)",
}))`
  height: 2rem;
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 2rem;
  color: ${props => props.color};
`;

export const AddButton = styled.button`
  margin: 8px 0;
  border: 1.5px solid transparent;
  border-radius: 3px;
  padding: 0 15px;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.4);
  background-color: var(--sign-green);
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 2.6rem;
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
export const RemoveButton = styled.button`
  border: none;
  box-shadow: none;
  background-color: transparent;
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 2rem;
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
export const AcceptButton = styled(AddButton)`
  margin: 0;
  padding: 0 12px;
  line-height: 3rem;
`;

export const CancelButton = styled(AddButton)`
  margin: 0;
  border: 1.5px solid var(--basic-navy-blue);
  padding: 0 12px;
  background-color: transparent;
  line-height: 3rem;
  color: var(--basic-navy-blue);
  &:hover {
    background-color: var(--basic-navy-blue);
    color: var(--basic-white);
  }
  &:active {
    background-color: var(--basic-navy-blue);
    color: var(--basic-white);
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

export const UploadWrapper = styled.div`
  display: flex;
  jusify-content: flex-start;
  align-items: center;
  width: 100%;
`;
export const UploadName = styled.span`
  display: block;
  width: 100px;
  height: 2.2rem;
  font-size: 1.6rem;
  font-weight: bold;
  font-style: italic;
  text-align: center;
  line-height: 2.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const UploadInput = styled.input`
  width: 95px;
  padding: 5px;
  font-size: 0;
  cursor: pointer;
  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }
  &::-webkit-file-upload-button {
    width: 85px;
    margin: 0;
    background-color: transparent;
    border-radius: 3px;
    border: 1.5px solid var(--basic-navy-blue);
    box-shadow: none;
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 2.2rem;
    color: var(--basic-navy-blue);
    cursor: pointer;
  }
  &::file-selector-button {
    width: 85px;
    margin: 0;
    background-color: transparent;
    border-radius: 3px;
    border: 1.5px solid var(--basic-navy-blue);
    outline: none;
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 2.2rem;
    color: var(--basic-navy-blue);
    cursor: pointer;
  }
  &::-webkit-file-upload-button:hover {
    background-color: var(--basic-navy-blue);
    color: var(--basic-white);
  }
  &::file-selector-button:hover {
    background-color: var(--basic-navy-blue);
    color: var(--basic-white);
  }
  &::-webkit-file-upload-button:active {
    border: 1.5px solid var(--basic-navy-blue);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.8);
    outline: none;
  }
  &::file-selector-button:active {
    border: 1.5px solid var(--basic-navy-blue);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.8);
    outline: none;
  }
  &::-webkit-file-upload-button:focus {
    border: 1.5px solid var(--basic-navy-blue);
    outline: none;
  }
  &::file-selector-button:focus {
    border: 1.5px solid var(--basic-navy-blue);
    outline: none;
  }
`;
