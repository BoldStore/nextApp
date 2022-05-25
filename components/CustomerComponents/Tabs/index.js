import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Paper } from "@mui/material";
import { Home, User, Search, ShoppingBag } from "react-feather";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";

export default function CustomerTabs() {
  const [value, setValue] = React.useState("recents");
  const router = useRouter();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            onClick={() => router.push("/customer")}
          />
          <CustomBottomNavigationAction
            value="search"
            icon={<Search />}
            onClick={() => router.push("/customer/search")}
          />
          <CustomBottomNavigationAction
            value="bag"
            icon={<ShoppingBag />}
            onClick={() => router.push("/customer/bag")}
          />
          <CustomBottomNavigationAction
            value="profile"
            icon={<User />}
            onClick={() => router.push("/customer/profile")}
          />
        </BottomNavigation>
      </Paper>
    </ThemeProvider>
  );
}
