import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import SwitchRightRoundedIcon from "@mui/icons-material/SwitchRightRounded";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { memo, useState } from "react";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { EMode, tokens } from "../../theme";

export interface IItem {
  title: string;
  to: string;
  icon: any;
  selected: string;
  setSelected: any;
}

const Item = ({ title, to, icon, selected, setSelected }: IItem) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode as EMode);
  return (
    <Link to={to}>
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    </Link>
  );
};

const sideBarMap = [
  {
    title: "Dashboard",
    to: "/",
    icon: <HomeOutlinedIcon />,
    subMenu: false,
  },
  {
    subMenu: true,
    label: "MANAGE",
    routes: [
      {
        title: "Manage Team",
        to: "teams",
        icon: <PeopleOutlinedIcon />,
      },
      {
        title: "Calendar",
        to: "calendar",
        icon: <PeopleOutlinedIcon />,
      },
    ],
  },
  {
    subMenu: true,
    label: "MANAGE",
    routes: [
      {
        title: "Contacts Information",
        to: "/contacts",
        icon: <ContactsOutlinedIcon />,
      },
      {
        title: "Invoices Balances",
        to: "/invoices",
        icon: <ReceiptOutlinedIcon />,
      },
    ],
  },
];
const SideBar = memo(() => {
  const [selected, setSelected] = useState("Dashboard");
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode as EMode);
  const mode = theme.palette.mode;
  return (
    <Box
      sx={{
        "& .ps-sidebar-container": {
          background: `${colors.primary[400]} !important`,
          // background: "transparent",
        },
        "& .ps-sidebar-root": {
          background: `${colors.primary[400]} !important`,
          height: "100%",
          border: "none",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .ps-menu-button": {
          color: `${colors.blueAccent[100]} !important`,
        },
        "& .ps-menu-button:hover": {
          color: `${colors.blueAccent[600]} !important`,
          background: `${colors.primary[700]} !important`,
          borderRadius: "8px",
        },
        "& .ps-menuitem-root": {
          padding: "0 10px ",
          marginBottom: "10px",
        },
        "& .ps-menu-icon": {
          paddingRight: collapsed ? "10px" : "0",
        },
        "& .ps-active > .ps-menu-button": {
          color: `${colors.blueAccent[700]} !important`,
          background: `${colors.primary[700]} !important`,
          borderRadius: "8px",
        },
      }}
    >
      <Box
        sx={{
          background: `${colors.primary[400]} !important`,
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        // p={2}
      >
        {/* LOGO */}
        <h2>ADMIN</h2>
      </Box>
      <Box
        style={{
          height: "100%",
        }}
      >
        <Sidebar image="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg">
          <Menu>
            {sideBarMap.map((i) => {
              if (!i.subMenu) {
                return (
                  <Item
                    selected={selected}
                    setSelected={setSelected}
                    to={i.to as string}
                    icon={i.icon}
                    title={i.title as string}
                  />
                );
              } else {
                return (
                  <>
                    <Typography
                      variant="h6"
                      margin="0 0 5px 20px"
                      color={colors.blueAccent[600]}
                      fontWeight="bold"
                    >
                      {i.label}
                    </Typography>
                    {i.routes?.map((route) => (
                      <Item
                        selected={selected}
                        setSelected={setSelected}
                        {...route}
                      />
                    ))}
                  </>
                );
              }
            })}
          </Menu>

          <Box display="flex" justifyContent="center" alignItems="center">
            <IconButton onClick={() => collapseSidebar()}>
              <SwitchRightRoundedIcon />
            </IconButton>
          </Box>
        </Sidebar>
      </Box>
    </Box>
  );
});

export default SideBar;
