import Cookies from 'js-cookie';
import React from 'react';
import { createContext, useEffect, useState } from 'react';
import { useErrors } from '../utils/hooks/use-errors';
import { useNavigate } from 'react-router-dom';

// import { config } from '../config/auth-config';
// import { LoginSchema } from '../interfaces/schemas/login-schema';
import { Axios } from '../interfaces/shared/axios';
import { LoginService } from '../services/LoginService';
import { config } from './AuthConfig';
// import { AuthContextType } from '../interfaces/shared/auth-context';
// import { LoginEntity } from '../interfaces/entites/login-entity'
// import { BaseResponseApi } from '../interfaces/shared/base-response-api'

const AuthContext = createContext<any>({
  isAuthenticated: false,
  signIn: () => Promise.resolve(),
  logout: () => { }
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const token = Cookies.get('jwtApplicationToken');
  const loginService = new LoginService()
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const navigate = useNavigate()

  async function signIn(data: any) {
    const result = loginService.loginPost(data)
      .then(({data}: any
      ) => {
        setIsAuthenticated(true)
        Cookies.set('userType',data.data.userType,{ expires: 0.1 })
        Cookies.set('jwtApplicationToken', data.data.accessToken, { expires: 0.1 })
        Cookies.set('expirationJwtApplicationToken', data.data.expirationTimeAccessToken, { expires: 0.1 })
        Cookies.set('expirationDateTimeJwtApplicationToken', data.data.expirationDateTimeAccessToken, { expires: 0.1 })
        window.location.href = "/"
      })
      .catch((error) => {
        useErrors(error);
      })

    return result
  }

  function logout() {
    Cookies.remove('jwtApplicationToken');
    Cookies.remove('expirationJwtApplicationToken');
    Cookies.remove('expirationDateTimeJwtApplicationToken');
    window.location.href = "/login"
  }

  const authContext: any = {
    signIn: signIn,
    logout: logout,
    isAuthenticated: isAuthenticated
  }

  useEffect(() => {
    const expirationDate: any = Cookies.get("expirationDateTimeAccessToken")
    const timeDiference = new Date(expirationDate).getTime() - new Date().getTime()

    setTimeout(() => {
      if (token && config.authorizeNotRequired.includes(window.location.pathname)) {
        navigate("/")
      }
      if (token) {

      }
      else if (!config.authorizeNotRequired.includes(window.location.pathname) && !config.desactivateAuth) {
        authContext.logout()
      }
    }, timeDiference);
  }, [])

  return (
    <AuthContext.Provider value={authContext}>
      {children}
    </AuthContext.Provider>
  );
};

export {
  AuthContext,
  AuthProvider
}