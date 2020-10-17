import React from "react";
import Input from "../atoms/Input";

function ProfileSettings({ user }) {
  return (
    <div className="displayFlexColumn containerForUserSettings">
      <h2>Settings</h2>
      <div className="containerForUserPhoto">
        <img src={user.photo} width="150" height="200"></img>
      </div>
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
    </div>
  );
}

export default ProfileSettings;
