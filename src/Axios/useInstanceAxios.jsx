import axios from "axios";

const instanceAxios = axios.create({
  baseURL: 'http://localhost:3000',
});

const useInstanceAxios = () => {

  instanceAxios.interceptors.request.use(config => {
    console.log(config)
    return config;
  })
  
  return instanceAxios;
}

export default useInstanceAxios;