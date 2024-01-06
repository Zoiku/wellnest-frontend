import { useState, useMemo } from "react";
import prompts from "../utilities/preferences";
import useForm from "./useForm";
import useAuth from "./useAuth";
import useSnackbar from "./useSnackbar";

const usePreferences = () => {
  const { alertSuccess } = useSnackbar();
  const { modifyAuth } = useAuth();
  const { handleChange, values } = useForm("preferences");
  const [preference, setPreference] = useState({});
  const selected = (option) => preference[prompt.name] === option;
  const handleChangePreference = (option) => () => {
    setPreference({
      ...preference,
      [prompt.name]: option,
    });
  };

  const [index, setIndex] = useState(0);
  const prompt = useMemo(() => prompts.at(index), [index]);
  const handleNextIndex = () => setIndex((prev) => prev + 1);
  const handlePreviousIndex = () => setIndex((prev) => prev - 1);
  const handleDisableNextIndex = () => {
    return false;
  };

  const disablehandlePreviousIndex = index === 0;
  const showSubmitButton = index >= prompts.length - 1;
  const disablehandleSubmit = false;
  const handleSubmit = () => {
    modifyAuth("preferences", preference);
    alertSuccess("Congratulations! You are all set up");
  };

  return {
    prompt,
    selected,
    handleNextIndex,
    handlePreviousIndex,
    handleSubmit,
    handleChangePreference,
    handleDisableNextIndex,
    disablehandlePreviousIndex,
    disablehandleSubmit,
    showSubmitButton,
    handleChange,
    values,
  };
};

export default usePreferences;
