import { animated, useTransition } from "@react-spring/web";

const useAnimations = () => {
  const pageTransitions = (key) =>
    useTransition(key, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      exitBeforeEnter: true,
    });

  const preferenceTransitions = (key) =>
    useTransition(key, {
      from: { opacity: 0, position: "relative", top: "50px" },
      enter: { opacity: 1, position: "relative", top: "0px" },
      leave: { opacity: 0, position: "relative", top: "50px" },
      exitBeforeEnter: true,
    });

  return { animated, pageTransitions, preferenceTransitions };
};

export default useAnimations;
