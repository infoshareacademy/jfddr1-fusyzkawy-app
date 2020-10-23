import React from "react";
import ProfileSettings from "../molecules/ProfileSettings/ProfileSettings";

const user1 = {
  dateOfBirth: "1990-10-15",
  email: "urajannet@gmail.com",
  name: "Nur A Jannet",
  phone: "123-456-789",
  photo:
    "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  username: "nurajannet",
};

const Users = () => {
  return (
    <div className="mainHome">
      <h1>Users</h1>

      <ProfileSettings user={user1} />
    </div>
  );
};

export default Users;
