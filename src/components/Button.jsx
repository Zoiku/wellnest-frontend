import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material";
import useObject from "../hooks/useObject";
import useButton from "../hooks/useButton";

const Button = (props) => {
  const { removeProps } = useObject(props);
  const newProps = removeProps(["label", "style"]);
  const styles = useButton(props.style);
  const MuiButton = styled(LoadingButton)(styles.styles);

  return (
    <MuiButton disableElevation variant={styles.variant} {...newProps}>
      {props.label}
    </MuiButton>
  );
};

export default Button;
