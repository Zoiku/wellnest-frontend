import { useFormik } from "formik";
import useAuth from "./useAuth";
import {
  signInFormInitialValues,
  signUpFormInitialValues,
} from "../states/index";
import useAxios from "./useAxios";
import { useState } from "react";
import useSnackbar from "./useSnackbar";

const useForm = (handler) => {
  const { post } = useAxios();
  const { alertError, alertOff } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const [errors, setErrors] = useState([]);

  const handleSignInPatient = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const { data } = await post("/login", { ...values, role: "patient" });
      alertOff();
      signIn(data, "patient");
    } catch (error) {
      setErrors([...errors, error]);
      alertError("Incorrect Username or Password");
    }
    setLoading(false);
  };

  const handleSignInTherapist = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const { data } = await post("/login", { ...values, role: "therapist" });
      alertOff();
      signIn(data, "therapist");
    } catch (error) {
      setErrors([...errors, error]);
      alertError("Incorrect Username or Password");
    }
    setLoading(false);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
  };

  const formHandler = {
    signInPatient: {
      initialValues: signInFormInitialValues,
      handleSubmit: handleSignInPatient,
      handleValidation: null,
    },
    signInTherapist: {
      initialValues: signInFormInitialValues,
      handleSubmit: handleSignInTherapist,
      handleValidation: null,
    },
    signUp: {
      initialValues: signUpFormInitialValues,
      handleSubmit: handleSignUp,
      handleValidation: null,
    },
    preferences: {
      initialValues: {},
      handleSubmit: null,
      handleValidation: null,
    },
  };

  const { initialValues, handleSubmit, handleValidation } =
    formHandler[handler];

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validate: handleValidation,
  });

  const { values, handleChange, handleReset } = formik;

  return { errors, values, handleChange, handleReset, handleSubmit, loading };
};

export default useForm;
