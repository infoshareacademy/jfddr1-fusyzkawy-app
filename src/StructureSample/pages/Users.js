import React from "react";
import ProfileSettings from "../molecules/ProfileSettings";
import { user1 } from "../../test_variables";

const Users = () => {
  return (
    <div className="mainHome">
      <h1>Users</h1>

      <ProfileSettings user={user1} />
    </div>
  );
};

export default Users;
