import { atom, useAtom } from "jotai";

const snackbarAtom = atom({
  open: false,
  message: null,
  severity: undefined,
});

const useSnackbar = () => {
  const [snackbar, setSnackbar] = useAtom(snackbarAtom);
  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({
      ...snackbar,
      open: false,
    });
  };

  const alertSuccess = (message) => {
    handleClose();
    setSnackbar({
      open: true,
      severity: "success",
      message: message,
    });
  };

  const alertError = (message) => {
    handleClose();
    setSnackbar({
      open: true,
      severity: "error",
      message: message,
    });
  };

  const alertOff = () => {
    handleClose();
  };

  return { snackbar, handleClose, alertSuccess, alertError, alertOff };
};

export default useSnackbar;
