import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StoreIcon from "@mui/icons-material/Store";
import CategoryIcon from "@mui/icons-material/Category";
import BarChartIcon from "@mui/icons-material/BarChart";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import { createElement } from "react";
import { Paths } from "../utils/enums/paths";
import { Link } from "react-router";

const Sidebar = () => {
  const listIcons = [
    StoreIcon,
    CategoryIcon,
    BarChartIcon,
    InsertChartOutlinedIcon,
  ];
  const menuItems = ["Store", "SKU", "Planning", "Charts"];

  const DrawerList = (
    <Box role="presentation">
      <List>
        {menuItems.map((key, index) => (
          <ListItem key={key} disablePadding>
            <ListItemButton
              component={Link}
              to={Paths[key.toUpperCase() as keyof typeof Paths]}>
              <ListItemIcon>
                {listIcons[index] && createElement(listIcons[index])}
              </ListItemIcon>
              <ListItemText primary={key} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer variant="permanent" sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 170,
          height: "calc(100vh - 64px)",
          mt: "64px",
          position: "fixed",
        },
      }}>
      {DrawerList}
    </Drawer>
  );
};

export default Sidebar;