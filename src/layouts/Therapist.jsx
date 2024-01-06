import "../styles/Layout.Therapist.css";
import { Outlet } from "react-router-dom";
import Certification from "../pages/therapist/Certification";
import useAuth from "../hooks/useAuth";
import Nav from "../components/NavTherapist";
import Centered from "../components/Centered";

const Therapist = () => {
  const { auth } = useAuth();

  return auth.certification ? (
    <>
      <Nav />
      <Centered className="therapist-layout">
        <div className="therapist-layout-body">
          <Outlet />
        </div>
      </Centered>
    </>
  ) : (
    <Certification />
  );
};

export default Therapist;
