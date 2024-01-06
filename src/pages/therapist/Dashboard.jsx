import "../../styles/Dashboard.Therapist.css";
import useNavigation from "../../hooks/useNavigation";
import Section from "../../components/Section";

const PatientCard = (props) => {
  const { goTo } = useNavigation();
  return (
    <div
      onClick={() => goTo(`/therapist/patient/${props.id}`)}
      className="patient-card"
    >
      <div className="patient-card-image">
        <img src="https://s3-alpha-sig.figma.com/img/96ca/4f3c/99225394e50df5e7a78773cc97a178c7?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b0o3l3dJVECP5-Aue3x3Y~4JUEqbmV7Jhp7Lf7ZgAKaG6xSjTVm8mWoO3lrmo~vfHSxHPkjB4Gqy4gU3oBYdJCPxISkIAumWG~IEogfbMgp0mufSBo6b0haVoVeyIKYir~UvoDk5yvoGbI~bIfC1MBlgH96mY1RNMgz8fXngDG7G~PabGveBEpcs-L-EVfvuIBfjFHrxp3dX82xfToyO3oJK1bp3be7Vru6u1MnVLL5Pd7pq586Q5N~05WJn~szIUmGJnU56clJZsn4E1SxvkWDLBO-xyfbvVSb-bYk2ScrCIy8glfYx~VnFEVu-WlrZUZEyAYtM~G4WPWXjmCNgAA__" alt="" />
      </div>
      <div className="patient-card-description">
        <div>Jeremy Klaton</div>
        <div>4 Upcoming Sessions</div>
        <div>8 Completed Sessions</div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <Section className={"patient-cards"} label={"Your Patients"}>
        {Array.from(Array(1)).map(() => (
          <PatientCard id={0} />
        ))}
      </Section>
    </div>
  );
};

export default Dashboard;
