import "../styles/Nav.Patient.css";
import { Avatar, IconButton, MenuItem, MenuList } from "@mui/material";
import NotifMessage from "../icons/NotifMessage";
import useAuth from "../hooks/useAuth";
import useMenu from "../hooks/useMenu";
import useModal from "../hooks/useModal";
import Menu from "./Menu";
import Divider from "@mui/material/Divider";
import Drawer from "./Drawer";
import ChatApp from "./ChatApp";
import useNavigation from "../hooks/useNavigation";
import Centered from "./Centered";

const NavPatient = () => {
  const { goTo } = useNavigation();
  const { auth, signOut } = useAuth();
  const avatarMenu = useMenu();
  const chatDrawer = useModal();

  return (
    <>
      <Centered className={"nav"}>
        <div className="nav-logo">Wellnest</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={chatDrawer.handleOpen}>
            <NotifMessage />
          </IconButton>
          <IconButton onClick={avatarMenu.handleOpen}>
            <Avatar sx={{ background: "#B4D1C4" }} src={auth.imageUrl} />
          </IconButton>
        </div>
      </Centered>
      <Menu
        open={avatarMenu.open}
        anchorEl={avatarMenu.anchorEl}
        onClose={avatarMenu.handleClose}
        position={"right"}
      >
        <MenuList dense>
          <MenuItem onClick={() => goTo("/patient/therapists/")}>
            Therapists
          </MenuItem>
          <MenuItem onClick={() => goTo("/patient/appointments/")}>
            Appointments
          </MenuItem>
        </MenuList>
        <Divider />
        <MenuList dense>
          <MenuItem onClick={signOut}>Logout</MenuItem>
        </MenuList>
      </Menu>

      <Drawer
        title={"Messages"}
        anchor={"bottom"}
        open={chatDrawer.open}
        handleClose={chatDrawer.handleClose}
        handleOpen={chatDrawer.handleOpen}
      >
        <ChatApp />
      </Drawer>
    </>
  );
};

export default NavPatient;
