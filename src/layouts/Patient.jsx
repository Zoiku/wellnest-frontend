import "../styles/Layout.Patient.css";
import { Outlet } from "react-router-dom";
import Preferences from "../pages/patient/Preferences";
import useAuth from "../hooks/useAuth";
import Nav from "../components/NavPatient";
import Centered from "../components/Centered";

const Patient = () => {
  const { auth } = useAuth();

  return auth.preferences ? (
    <>
      <Nav />
      <Centered className="patient-layout">
        <div className="patient-layout-body">
          <Outlet />
        </div>
      </Centered>
    </>
  ) : (
    <Preferences />
  );
};

export default Patient;
