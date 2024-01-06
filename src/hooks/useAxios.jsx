import axios from "../services/axios";

const useAxios = () => {
  const get = (url) => axios.get(url);
  const post = (url, request) => axios.post(url, request);
  return { get, post };
};

export default useAxios;
