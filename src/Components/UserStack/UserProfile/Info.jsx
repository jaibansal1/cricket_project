import * as React from "react";
import Title from "../../GlobalComponents/Title";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Info = (props) => {
  return (
    <React.Fragment>
      <Box sx={{ mx: "auto", my: 1 }}>
        <Title>Player Info</Title>
      </Box>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemText primary={props.yearProp} />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary={props.batProp} />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary={props.bowlProp} />
            </ListItem>
          </List>
        </nav>
      </Box>
    </React.Fragment>
  );
};
export default Info;
