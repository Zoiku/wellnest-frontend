import "../../styles/Auth.css";
import FormInput, { FormInputs } from "../../components/FormInputs";
import useForm from "../../hooks/useForm";
import Button from "../../components/Button";
import useNavigation from "../../hooks/useNavigation";

const Index = () => {
  const { goTo } = useNavigation();
  const { values, handleChange, handleSubmit, loading, errors } =
    useForm("signInPatient");

  return (
    <div className="auth-page">
      <div className="auth-form-wrapper">
        <form onSubmit={handleSubmit} className="auth-form">
          <div>
            <center>
              <h1>Wellnest</h1>
            </center>
          </div>

          <FormInputs>
            <FormInput
              error={errors.length > 0}
              placeholder={"Enter your email"}
              value={values.email}
              onChange={handleChange}
              name={"email"}
              type={"email"}
              required
            />
            <FormInput
              error={errors.length > 0}
              placeholder={"Enter your password"}
              value={values.password}
              onChange={handleChange}
              name={"password"}
              type={"password"}
              required
            />
          </FormInputs>
          <div>
            <Button
              color={errors.length > 0 ? "error" : undefined}
              fullWidth
              style={"000"}
              type={"submit"}
              label={"Sign in"}
              loading={loading}
            />
          </div>
          <div className="auth-user-switch">
            <Button onClick={() => goTo("/therapist")} label={"Therapist"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
