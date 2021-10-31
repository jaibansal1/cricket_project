import * as React from "react";
import Title from "../Static/Title";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function preventDefault(event) {
  event.preventDefault();
}

const Info = () => {
  return (
    <React.Fragment>
      <Box sx={{ mx: "auto", my: 1 }}>
        <Title>Player Info</Title>
      </Box>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemText primary="Sophomore" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Batting Allrounder" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Right Hand Bat" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Right Arm Medium Fast" />
            </ListItem>
          </List>
        </nav>
      </Box>
    </React.Fragment>
  );
};
export default Info;
