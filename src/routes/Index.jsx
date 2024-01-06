import { Routes, Route } from "react-router-dom";
import LoginPatient from "../pages/patient";
import DashboardPatient from "../pages/patient/Dashboard";
import DashboardTherapist from "../pages/therapist/Dashboard";
import TherapistProfile from "../pages/patient/TherapistProfile";
import PatientProfile from "../pages/therapist/PatientProfile";
import PatientAppointments from "../pages/patient/Appointments";
import LayoutPatient from "../layouts/Patient";
import LayoutTherapist from "../layouts/Therapist";
import LoginTherapist from "../pages/therapist/Index";
import RequireAuth from "../private/RequireAuth";
import PageNotFound from "../pages/PageNotFound";
import useAnimations from "../hooks/useAnimations";
import { useLocation } from "react-router-dom";

const AppRoutes = () => {
  const location = useLocation();
  const { animated, pageTransitions } = useAnimations();

  return pageTransitions(location.pathname)((style, key) => (
    <animated.div style={style}>
      <Routes location={key}>
        <Route path="/" element={<LoginPatient />} />
        <Route path="/patient" element={<LoginPatient />} />
        <Route path="/therapist" element={<LoginTherapist />} />

        <Route element={<RequireAuth fallback={"/patient/"} />}>
          <Route element={<LayoutPatient />}>
            <Route path="/patient/therapists" element={<DashboardPatient />} />
            <Route
              path="/patient/therapists/:id"
              element={<TherapistProfile />}
            />
            <Route
              path="/patient/appointments/"
              element={<PatientAppointments />}
            />
          </Route>
        </Route>

        <Route element={<RequireAuth fallback={"/therapist/"} />}>
          <Route element={<LayoutTherapist />}>
            <Route
              path="/therapist/patients"
              element={<DashboardTherapist />}
            />
            <Route path="/therapist/patient/:id" element={<PatientProfile />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </animated.div>
  ));
};

export default AppRoutes;
