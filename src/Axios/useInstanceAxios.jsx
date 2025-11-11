import axios from 'axios';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const instance = axios.create({
  baseURL:'https://social-development-events.vercel.app'
});

const useInstanceAxios = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const accessAuth = instance.interceptors.request.use(config => {
      config.headers.authorization = `Bearer ${user.accessToken}`;
      return config;
    });

    const accessResponse = instance.interceptors.response.use(
      res => {
        return res;
      },
      err => {
        const status = err.status;
        if (status === 403 || status === 401) {
          logOut()
            .then(() => {
              navigate('/register');
            })
            .catch(err => {
              console.log(err);
            });
        }

        return err;
      }
    );
    return () => {
      instance.interceptors.request.eject(accessAuth);
      instance.interceptors.response.eject(accessResponse);
    };
  }, [user, navigate, logOut]);

  return instance;
};

export default useInstanceAxios;
