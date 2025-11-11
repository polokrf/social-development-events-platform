import axios from 'axios';

const instance = axios.create({
  baseURL:'https://social-development-events.vercel.app'
});

const useAxios = () => {
  return instance;
};

export default useAxios;
