import MuiDialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "./Button";

const Dialog = (props) => {
  return (
    <MuiDialog
      disableScrollLock
      maxWidth="xs"
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {props.title && (
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
      )}

      {props.content && (
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.content}
          </DialogContentText>
        </DialogContent>
      )}

      <DialogActions>
        <Button label={"Disagree"} onClick={props.handleClose} />
        <Button label={"Agree"} onClick={props.handleAgree} autoFocus />
      </DialogActions>
    </MuiDialog>
  );
};

export default Dialog;
