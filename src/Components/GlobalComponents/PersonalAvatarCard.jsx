import * as React from "react";
import Title from "./Title";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import { Link } from "@mui/material";

const PersonalAvatarCard = (props) => {
  return (
    <React.Fragment>
      <Avatar
        sx={{
          height: 60,
          width: 60,
          mx: "auto",
          my: 3,
          gcolor: deepPurple[500],
        }}
        src={props.imageProp}
      ></Avatar>
      <Box sx={{ mx: "auto", my: 0.6 }}>
          <Title>{props.nameProp}</Title>
      </Box>
      <Box sx={{ mx: "auto", my: 0.6 }}>
        <Title>{props.roleProp}</Title>
      </Box>
    </React.Fragment>
  );
};
export default PersonalAvatarCard;
