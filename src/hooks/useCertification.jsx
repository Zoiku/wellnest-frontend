import useSnackbar from "../hooks/useSnackbar";
import useAuth from "./useAuth";
import { useState } from "react";

const useCertification = () => {
  const { modifyAuth } = useAuth();
  const { alertSuccess } = useSnackbar();
  const [fileUploads, setFileUploads] = useState([]);
  const handleFileUpload = (event) => {
    const file = {
      name: event.target.files[0].name,
      size: event.target.files[0].size,
      type: event.target.files[0].type,
    };
    setFileUploads((previousFiles) => [...previousFiles, file]);
  };
  const handleRemoveFile = () => {};
  const handleSubmission = () => {
    modifyAuth("certification", fileUploads);
    alertSuccess("Your files have been successfully verified");
  };

  return { handleFileUpload, handleRemoveFile, handleSubmission, fileUploads };
};

export default useCertification;
