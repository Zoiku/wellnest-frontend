import "../../styles/PatientProfile.css";
import Button from "../../components/Button";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import useNavigation from "../../hooks/useNavigation";
import FormInput, { FormInputs } from "../../components/FormInputs";

const PatientCard = () => (
  <div className="patient-card-for-therapist">
    <div className="patient-card-for-therapist-inner">
      <div className="patient-card-for-therapist-image">
        <img
          src="https://s3-alpha-sig.figma.com/img/96ca/4f3c/99225394e50df5e7a78773cc97a178c7?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b0o3l3dJVECP5-Aue3x3Y~4JUEqbmV7Jhp7Lf7ZgAKaG6xSjTVm8mWoO3lrmo~vfHSxHPkjB4Gqy4gU3oBYdJCPxISkIAumWG~IEogfbMgp0mufSBo6b0haVoVeyIKYir~UvoDk5yvoGbI~bIfC1MBlgH96mY1RNMgz8fXngDG7G~PabGveBEpcs-L-EVfvuIBfjFHrxp3dX82xfToyO3oJK1bp3be7Vru6u1MnVLL5Pd7pq586Q5N~05WJn~szIUmGJnU56clJZsn4E1SxvkWDLBO-xyfbvVSb-bYk2ScrCIy8glfYx~VnFEVu-WlrZUZEyAYtM~G4WPWXjmCNgAA__"
          alt=""
        />
      </div>
      <div className="patient-card-for-therapist-desc">
        <div>Jeremy Klayton</div>
        <div>4 Upcoming Sessions</div>
        <div>8 Completed Sessions</div>
      </div>
    </div>
    <div>
      <Button label={"Join Call"} />
    </div>
  </div>
);

const SessionCard = () => (
  <div className="session-card">
    <div className="session-date">
      {String(new Date().toString()).slice(0, 15)}
    </div>
    <div
      style={{
        display: "flex",
        gap: 10,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="session-card-tags">
        <div className="session-card-tag">2 hours</div>
        <div className="session-card-tag">9am - 11am</div>
        <div className="session-card-tag">Video</div>
      </div>
      <div>
        <Button label={"Join Call"} />
      </div>
    </div>
  </div>
);

const PatientProfile = () => {
  const { goBack } = useNavigation();

  return (
    <div className="patient-profile-page">
      <div>
        <Button
          onClick={goBack}
          startIcon={<KeyboardBackspaceRoundedIcon />}
          label={"Go back"}
        />
      </div>
      <div className="patient-profile-content-container">
        <div className="patient-profile-description">
          <PatientCard />
          <div className="patient-profile-info">
            <FormInputs>
              <FormInput
                labelHelper={"1. What is the main reason for therapy"}
                disabled
                label={"Anxiety, Depression"}
              />
              <FormInput
                labelHelper={"2. Do you have any previous therapy experience?"}
                disabled
                label={"Yes"}
              />
              <FormInput
                labelHelper={"3. If yes, please elaborate."}
                disabled
                label={
                  "In 2019 I got into therapy for my depression. It was a very tedious experience and I did not think I would be looking for another therapist anytime."
                }
              />
              <FormInput
                labelHelper={"4. Do you have any previous therapy experience?"}
                disabled
                label={"Yes"}
              />
            </FormInputs>
          </div>
        </div>
        <div className="patient-profile-session-history">
          <div className="session-tag-meta">
            <span>Live</span>
          </div>
          <SessionCard />
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
