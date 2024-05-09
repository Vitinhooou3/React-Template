import axios from "axios";
import { LoginForm } from "../interfaces/data/LoginForm";
import { api } from "./api";

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