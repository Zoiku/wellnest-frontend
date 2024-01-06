import useTabs from "./useTabs";
import { columns } from "../table columns/appointments";
import { requests, active, history } from "../data/";

const useAppointments = () => {
  const [index, setIndex] = useTabs();

  const rows = {
    0: requests,
    1: active,
    2: history,
  };

  return { index, setIndex, columns: columns[index], rows: rows[index] };
};

export default useAppointments;
