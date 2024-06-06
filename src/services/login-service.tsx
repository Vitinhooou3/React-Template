import axios from "axios";
import { api } from "./api";
import { LoginForm } from '../interfaces/data/login-form'

export class LoginService {
  loginPost(_: LoginForm) {
    const result = axios.post("https://localhost:7240/sign-in", {
      email: _.email,
      password: _.password
    })
      .then(response => {
        return response
      })
      .catch((error) => {
        throw error
      })
    return result
  }
}