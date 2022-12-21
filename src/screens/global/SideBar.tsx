import { Box, Theme, Typography, useTheme } from '@mui/material';
import React, { memo, useState } from 'react';
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import { EMode, tokens } from '../../theme';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export interface IItem {
  title: string, to: string, icon: any, selected: string, setSelected: any
}

const Item = ({ title, to, icon, selected, setSelected }: IItem) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode as EMode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const sideBarMap = [
  {
    title: "Dashboard",
    to: "/",
    icon: <HomeOutlinedIcon />
  },
  {
    title: "Manage Team",
    to: "/team",
    icon: <PeopleOutlinedIcon />
  }, {
    title: "Contacts Information",
    to: "/contacts",
    icon: <ContactsOutlinedIcon />
  }, {
    title: "Invoices Balances",
    to: "/invoices",
    icon: <ReceiptOutlinedIcon />
  },
]
const SideBar = memo(() => {
  const [selected, setSelected] = useState("Dashboard");
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode as EMode);
  const mode = theme.palette.mode;
  return (
    <Box
      sx={{
        "& .ps-sidebar-container": {
          background: `${colors.primary[400]} !important`,
        },
        "& .ps-sidebar-root": {
          background: `${colors.primary[400]} !important`,
          height: "100%"
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .ps-menu-button": {
          color: `${mode === EMode.DARK ? '#fff' : '#00000054'} !important`,
        },
        "& .ps-menu-button:hover": {
          color: `${mode === EMode.DARK ? colors.blueAccent[400] : colors.blueAccent[900]} !important`,
          background: `${colors.primary[700]} !important`,
        },
        "& .ps-active > .ps-menu-button": {
          color: `${mode === EMode.DARK ? colors.blueAccent[400] : colors.blueAccent[900]} !important`,
          background: `${colors.primary[700]} !important`,

        },
      }}

    >
      <Box>
        {/* LOGO */}
        ADMIN
      </Box>
      <Box
        style={{
          height: '100%'
        }}
      >
        <Sidebar >
          <Menu>
            {sideBarMap.map(i => (
              <Item
                selected={selected}
                setSelected={setSelected}
                {...i}
              />
            ))}
          </Menu>
        </Sidebar>
      </Box>

      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main>
    </Box>
  );
});

export default SideBar;