import React from "react";
import { Avatar } from "@mui/material";
import defaultPhoto from "../../assets/user.jpg";

export function UserAvatar(props) {
  return (
    <Avatar
      {...props}
      src={props.src || defaultPhoto}
      sx={{ width: 40, height: 40, cursor: "pointer", ...props.sx }}
    />
  );
}

// export default UserAvatar;
