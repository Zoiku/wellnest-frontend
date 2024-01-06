import "../../styles/TherapistProfile.css";
import { Avatar } from "@mui/material";
import Button from "../../components/Button";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import useNavigation from "../../hooks/useNavigation";
import Rating from "@mui/material/Rating";
import useDialog from "../../hooks/useDialog";
import useTherapists from "../../hooks/useTherapists";
import Dialog from "../../components/Dialog";
import { useParams } from "react-router-dom";

const TherapistReview = () => (
  <div className="therapist-review">
    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
      <Avatar />
      <div>
        <div>Anonymous User</div>
        <div>
          <Rating size="small" readOnly value={3} />
        </div>
      </div>
    </div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
      consectetur maxime eos sunt, facilis voluptatum accusantium nostrum totam
      officia at asperiores mollitia, pariatur qui velit earum quibusdam
      incidunt error modi.
    </div>
  </div>
);

const TherapistProfile = () => {
  const { id } = useParams();
  const { goBack } = useNavigation();
  const { open, handleOpen, handleClose, handleAgree } = useDialog();
  const { getTherapist } = useTherapists();
  const therapist = getTherapist(id);

  return (
    <>
      <div className="therapist-profile-page">
        <div>
          <Button
            onClick={goBack}
            startIcon={<KeyboardBackspaceRoundedIcon />}
            label={"Go back"}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div className="therapist-profile-image">
                <img src={therapist?.imageUrl} alt="" />
              </div>
              <h1>{therapist?.name}</h1>
            </div>

            <Button onClick={handleOpen} label={"Request Appointment"} />
          </div>

          <div>{therapist?.introduction}</div>
        </div>

        <div className="therapist-skill">
          <div style={{ display: "flex", gap: 10 }}>
            <span>Accra, Ghana</span>
            <span>{therapist?.sessions.length} Completed Sessions</span>
          </div>
          <div className="therapist-skill-tags">
            {therapist?.expertise.map((problem, index) => (
              <div key={index} className="therapist-skill-tag">
                {problem}
              </div>
            ))}
          </div>
        </div>

        <div className="therapist-reviews">
          {Array.from(Array(2)).map((_, index) => (
            <TherapistReview key={index} />
          ))}
        </div>
      </div>

      <Dialog
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        handleAgree={handleAgree}
        title={"Request an appointment?"}
        content={
          "The appointment will be scheduled and communicated to you once the request is accepted by the Therapist."
        }
      />
    </>
  );
};

export default TherapistProfile;
