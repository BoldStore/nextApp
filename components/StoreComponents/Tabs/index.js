import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Avatar, Paper } from "@mui/material";
import { Home, User, Search, Layout } from "react-feather";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebaseConfig";
import { useSelector } from "react-redux";
export default function StoreTabs() {
  const [value, setValue] = React.useState("recents");
  const router = useRouter();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [user] = useAuthState(auth);
  const profile = useSelector((state) => state.profile);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const CustomBottomNavigationAction = styled(BottomNavigationAction)(`
color: #808080;
&.Mui-selected {
  color: var(--white);
}
`);

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          sx={{
            width: "100vw",
          }}
          value={value}
          onChange={handleChange}
        >
          <CustomBottomNavigationAction
            value="home"
            icon={<Home />}
            onClick={() => router.push("/home")}
          />
          <CustomBottomNavigationAction
            value="search"
            icon={<Search />}
            onClick={() => router.push("/search")}
          />
          <CustomBottomNavigationAction
            value="dashboard"
            icon={<Layout />}
            onClick={() => router.push("/store/dashboard")}
          />
          <CustomBottomNavigationAction
            value="profile"
            icon={
              user ? (
                <Avatar
                  alt="Avatar"
                  src={profile.profile_pic}
                  sx={{
                    width: 35,
                    height: 35,
                    cursor: "pointer",
                  }}
                />
              ) : (
                <User />
              )
            }
            onClick={() => router.push("/profile")}
          />
        </BottomNavigation>
      </Paper>
    </ThemeProvider>
  );
}
