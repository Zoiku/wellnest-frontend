import MuiMenu from "@mui/material/Menu";

const Menu = (props) => {
  const position = {
    left: {
      transformOrigin: { horizontal: "left", vertical: "top" },
      anchorOrigin: { horizontal: "left", vertical: "bottom" },
    },
    right: {
      transformOrigin: { horizontal: "right", vertical: "top" },
      anchorOrigin: { horizontal: "right", vertical: "bottom" },
    },
  };

  return (
    <MuiMenu
      id="lock-menu"
      children={props.children}
      open={props.open}
      anchorEl={props.anchorEl}
      onClose={props.onClose}
      onClick={props.onClose}
      transformOrigin={position[props.position]?.transformOrigin}
      anchorOrigin={position[props.position]?.anchorOrigin}
      MenuListProps={{
        sx: { py: 0 },
        "aria-labelledby": "lock-button",
        role: "listbox",
      }}
      slotProps={{
        paper: {
          elevation: 1,
          sx: {
            minWidth: 150,
            py: 0,
            mt: 1,
          },
        },
      }}
    />
  );
};

export default Menu;
