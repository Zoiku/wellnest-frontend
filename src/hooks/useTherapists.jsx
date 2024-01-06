import { useQuery } from "react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";
import { useMemo } from "react";
import { atom, useAtom } from "jotai";

const therapistsAtom = atom(null);

const useTherapists = () => {
  const [therapists, setTherapists] = useAtom(therapistsAtom);
  const { get } = useAxios();
  const { auth } = useAuth();
  const patientReason = auth.preferences.reason;
  const matched = useMemo(() => {
    if (therapists) {
      return therapists.filter((therapist) =>
        therapist.expertise.includes(patientReason)
      );
    }
  }, [therapists]);

  const others = useMemo(() => {
    if (therapists) {
      return therapists.filter(
        (therapist) => !therapist.expertise.includes(patientReason)
      );
    }
  }, [therapists]);

  const getTherapist = (id) => {
    if (therapists) {
      return therapists.find(
        (therapist) => Number(id) === Number(therapist.id)
      );
    }
  };

  const fetch = async () => {
    try {
      const { data } = await get("/therapists");
      setTherapists(data);
    } catch (error) {
      return error;
    }
  };
  const { error, isLoading } = useQuery("therapists", fetch);
  return { matched, others, error, isLoading, getTherapist };
};

export default useTherapists;
