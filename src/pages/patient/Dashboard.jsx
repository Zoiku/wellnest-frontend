import "../../styles/Dashboard.Patient.css";
import Section from "../../components/Section";
import useNavigation from "../../hooks/useNavigation";
import useTherapists from "../../hooks/useTherapists";
import { Skeleton } from "@mui/material";

const TherapistCard = (props) => {
  const { goTo } = useNavigation();

  return (
    <div
      onClick={() => goTo(`/patient/therapists/${props.id}`)}
      className="therapist-card"
    >
      <div className="therapist-card-image">
        <img src={props.image} alt="" />
      </div>
      <div className="therapist-card-details">
        <div>{props.name}</div>
        <div>{props.sessions} Sessions</div>
        <div>GHc {props.charge}/Session</div>
      </div>
    </div>
  );
};

const TherapistCardSkeleton = () => (
  <div className="therapist-card">
    <div>
      <Skeleton variant="rounded" height={120} />
    </div>
    <div>
      <Skeleton height={20} />
      <Skeleton width={"50%"} height={20} />
      <Skeleton height={20} />
    </div>
  </div>
);

const Dashboard = () => {
  const { matched, others } = useTherapists();
  return (
    <div className="dashboard-page">
      <Section className={"therapist-cards"} label={"Matched Therapists"}>
        {matched
          ? matched.map((match, index) => (
              <TherapistCard
                key={index}
                sessions={match.sessions.length}
                id={match.id}
                image={match.imageUrl}
                name={match.name}
                charge={match.charge}
              />
            ))
          : Array.from(Array(6)).map((_, index) => (
              <TherapistCardSkeleton key={index} />
            ))}
      </Section>

      <Section className={"therapist-cards"} label={"Other Therapists"}>
        {others
          ? others.map((other, index) => (
              <TherapistCard
                key={index}
                sessions={other.sessions.length}
                id={other.id}
                image={other.imageUrl}
                name={other.name}
                charge={other.charge}
              />
            ))
          : Array.from(Array(3)).map((_, index) => (
              <TherapistCardSkeleton key={index} />
            ))}
      </Section>
    </div>
  );
};

export default Dashboard;
