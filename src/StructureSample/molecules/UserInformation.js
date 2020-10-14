//Username
//User photo -> image.js
//Profile settings -> open separate component:
//Change password
//Button -> "Log out"

import React from "react";

function UserInformation() {
  return (
    <div>
      <img
        src="https://metabiomedamericas.com/wp-content/uploads/2018/05/facebook-avatar-1024x645.jpg"
        alt="user photo"
        className="imgUserInformation"
      />
      <p>Username</p>
      <button>v</button>
    </div>
  );
}

export default UserInformation;
