//h2-> Settings
//h3 -> Profile details
//Name -> "Janek Kowalski" (input)
//User Name -> "janekKowal" (input)
//Data of Birth,  (input)
//h3-> Contact Info:
//phone,  (input)
//email, (input)
//Button -> Save Changes

import React from "react";
import Input from "../atoms/Input";

function ProfileSettings() {
  return (
    <div>
      <h2>Profile Settings</h2>
      <h3>Profile Details</h3>
      <p>Name: </p>
      <Input />
      <p>User Name: </p>
      <Input />
      <p>Date of Birth: </p>
      <Input />
      <h3>Contact info</h3>
      <p>Phone: </p>
      <Input />
      <p>Email</p>
      <Input />
      {/* dwie linie poniżej tylko na potrzeby chwili */}
      <br></br>
      <br></br>
      <button>Save changes</button>
    </div>
  );
}

export default ProfileSettings;
