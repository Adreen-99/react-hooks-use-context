// Import React and useContext
import React, { useContext } from "react";
// Import contexts
import { UserContext } from "../context/user";
import { ThemeContext } from "../context/Theme";
import Interests from "./Interests";

function Profile() {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  if (!user) return <h2>Please Login To View Profile</h2>;

  return (
    <div className={theme}>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} />
    </div>
  );
}

export default Profile;
