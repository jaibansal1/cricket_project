import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems } from "../../GlobalComponents/listItems";
import Paper from "@mui/material/Paper";
import AvatarCard from "../../GlobalComponents/AvatarCard";

import Copyright from "../../GlobalComponents/Copyright";
import { AppBar, Drawer } from "../../StyledComponents/StyledComponents";
import Header from "../../GlobalComponents/Header";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../../Services/firebase";

const mdTheme = createTheme();

const RosterUserView = () => {
  const [user, loading, error] = useAuthState(auth);
  const [rosterList, setRosterList] = useState([]);
  const [userData, setUserData] = useState("");

  const history = useHistory();

  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
    fetchUserData();
  }, [user, loading]);

  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const playerRef = collection(db, "player");
  const arrayData = [];

  const fetchUserData = async () => {
    try {
      const querySnapshot = await getDocs(playerRef);
      querySnapshot.forEach((doc) => {
        arrayData.push([
          doc.data().name,
          doc.data().role,
          doc.data().image,
          doc.data().uid,
        ]);
      });
      console.log(arrayData);

      setRosterList(arrayData);
      console.log(rosterList);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Header
            openProp={open}
            titleProp={"VCC Roster"}
            dataProp={userData}
            toggleProp={toggleDrawer}
          />
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>{mainListItems}</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Player Cards */}
              {rosterList.map((player) => {
                return (
                  <Grid item xs={12} md={4} lg={3}>
                    <Paper
                      sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        height: 240,
                      }}
                    >
                      <AvatarCard
                        nameProp={player[0]}
                        imageProp={player[2]}
                        roleProp={player[1]}
                        idProp={player[3]}
                      />
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

const UserDashboard = () => {
  return <RosterUserView />;
};

export default UserDashboard;
