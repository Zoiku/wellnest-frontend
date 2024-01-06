import "../../styles/Preferences.css";
import Centered from "../../components/Centered";
import usePreferences from "../../hooks/usePreferences";
import Button from "../../components/Button";
import { TextField } from "@mui/material";
import useAnimations from "../../hooks/useAnimations";

const Option = ({ value, onChange, selected }) => (
  <div
    onClick={onChange}
    className={`preference-option ${selected && "preference-option-selected"}`}
  >
    {value}
  </div>
);

const Preferences = () => {
  const { animated, preferenceTransitions } = useAnimations();
  const {
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
  } = usePreferences();

  return (
    <Centered className={"preferences-page"}>
      <div className="preferences-form-wrapper">
        {preferenceTransitions(prompt)((style, animtedPrompt) => (
          <animated.div style={style}>
            {animtedPrompt.heading && (
              <div className="preferences-form-heading">
                {animtedPrompt.heading}
              </div>
            )}
            <div className="preferences-form">
              <div className="preferences-form-question">
                {animtedPrompt.question}
              </div>
              <div className="preference-options">
                {animtedPrompt.options.map((option, index) => (
                  <Option
                    selected={selected(option)}
                    onChange={handleChangePreference(option)}
                    key={index}
                    value={option}
                  />
                ))}
                {animtedPrompt.elaborate &&
                  selected(
                    animtedPrompt.options.at(animtedPrompt.elaboration.choice)
                  ) && (
                    <TextField
                      name={animtedPrompt.name}
                      value={values[animtedPrompt.name]}
                      onChange={handleChange}
                      size="small"
                      placeholder={animtedPrompt.elaboration.placeholder}
                      fullWidth
                      multiline={true}
                      rows={5}
                    />
                  )}
              </div>
            </div>
          </animated.div>
        ))}
        <div className="preference-controllers">
          <Button
            style={"000"}
            onClick={handlePreviousIndex}
            label={"Previous"}
            disabled={disablehandlePreviousIndex}
          />
          {showSubmitButton ? (
            <Button
              style={"000"}
              onClick={handleSubmit}
              label={"Save & Continue"}
              disabled={disablehandleSubmit}
            />
          ) : (
            <Button
              style={"000"}
              onClick={handleNextIndex}
              label={"Next"}
              disabled={handleDisableNextIndex()}
            />
          )}
        </div>
      </div>
    </Centered>
  );
};

export default Preferences;
