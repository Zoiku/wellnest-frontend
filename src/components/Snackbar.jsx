import MuiSnackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import useSnackbar from "../hooks/useSnackbar";

const Snackbar = () => {
  const { snackbar, handleClose } = useSnackbar();

  return (
    <MuiSnackbar
      open={snackbar.open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        variant={"filled"}
        onClose={handleClose}
        severity={snackbar.severity}
        action={[]}
      >
        {snackbar.message}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
