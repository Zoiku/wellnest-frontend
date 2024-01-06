import "../styles/FormInputs.css";
import { TextField } from "@mui/material";

export const FormInputs = ({ children }) => (
  <div className="form-inputs">{children}</div>
);

const FormInput = (props) => {
  const { labelHelper, ...restProps } = props;
  return (
    <div className={`form-input ${labelHelper && "form-input-with-helper"}`}>
      {labelHelper && <div>{labelHelper}</div>}
      <TextField size="small" fullWidth {...restProps} />
    </div>
  );
};

export default FormInput;
