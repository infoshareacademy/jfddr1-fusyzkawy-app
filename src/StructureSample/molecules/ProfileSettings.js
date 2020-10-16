//h2-> Settings
//h3 -> Profile details
//Name -> "Janek Kowalski" (input)
//User Name -> "janekKowal" (input)
//Data of Birth,  (input)
//h3-> Contact Info:
//phone,  (input)
//email, (input)
//Button -> Save Changes

// const user1 = {
//   name: "Nur A Jannet",
//   username: "nurajannet",
//   dateOfBirth: "1990 10 15"
//   phone: "123-456-789"
//   email: "urajannet@gmail.com"
// }

import React from "react";

function Input({ title, type, isRequired, value }) {
  return (
    <div className="displayFlexColumn">
      <label className="labelUserSettings" for={title}>
        {" "}
        {title}{" "}
      </label>
      <input
        type={type}
        id={title}
        name={title}
        // {isRequired ? "required" : ""}
        value={value}
      ></input>
    </div>
  );
}

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
