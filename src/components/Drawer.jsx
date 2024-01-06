import "../styles/Drawer.css";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { IconButton } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";

const Drawer = (props) => {
  return (
    <SwipeableDrawer
      PaperProps={{ sx: { height: "100%" } }}
      anchor={props.anchor}
      open={props.open}
      onClose={props.handleClose}
      onOpen={props.handleOpen}
    >
      {props.title && (
        <AppBar position="relative">
          <Toolbar>
            <div className="app-toolbar">
              <h3>{props.title}</h3>
              <IconButton color="inherit" onClick={props.handleClose}>
                <CloseRounded />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      )}
      <div className="drawer-body">{props.children}</div>
    </SwipeableDrawer>
  );
};

export default Drawer;
