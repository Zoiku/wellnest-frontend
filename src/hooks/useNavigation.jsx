import { useNavigate } from "react-router-dom";

const useNavigation = () => {
  const navigate = useNavigate();
  const goTo = (to) => navigate(to);
  const goToWithoutHistory = (to) => navigate(to, { replace: true });
  const goBack = () => window.history.back();

  return { goTo, goToWithoutHistory, goBack };
};

export default useNavigation;
