import { useAtom } from "jotai";
import useNavigation from "./useNavigation";
import { atomWithStorage } from "jotai/utils";

const authAtom = atomWithStorage("auth", localStorage.getItem("auth"));

const signInRedirect = {
  patient: "/patient/therapists",
  therapist: "/therapist/patients",
};

const useAuth = () => {
  const { goToWithoutHistory } = useNavigation();
  const [auth, setAuth] = useAtom(authAtom);
  const signIn = (authData, role) => {
    setAuth(authData);
    goToWithoutHistory(signInRedirect[role], { replace: true });
  };
  const signOut = () => {
    setAuth(null);
  };
  const modifyAuth = (prop, value) => {
    setAuth({ ...auth, [prop]: value });
  };

  return { auth, modifyAuth, signIn, signOut };
};

export default useAuth;
