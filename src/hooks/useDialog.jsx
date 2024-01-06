import useModal from "./useModal";
import useSnackbar from "./useSnackbar";

const useDialog = () => {
  const { open, handleClose, handleOpen } = useModal();
  const { alertSuccess } = useSnackbar();
  const handleAgree = () => {
    alertSuccess("Your request has been processed successfully");
    handleClose();
  };
  return { open, handleClose, handleOpen, handleAgree };
};

export default useDialog;
