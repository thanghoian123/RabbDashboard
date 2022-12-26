import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { memo, useContext } from "react";
import { ColorModeContext, EMode, tokens } from "../../theme";

const TopBar = memo(() => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode as EMode);
  console.log("🚀 ~ file: TopBar.tsx:9 ~ TopBar ~ themes", theme);
  // console.log("🚀 ~ file: TopBar.tsx:9 ~ TopBar ~ colors", colors)
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        justifyContent="space-between"
        style={{
          backgroundColor: colors.primary[400],
          borderRadius: "3px",
        }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
      </Box>

      <Box display="flex">
        <IconButton
          onClick={() => {
            console.log(":------ vaod ay");

            colorMode.toggleColorMode();
          }}
        >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
});

export default TopBar;
