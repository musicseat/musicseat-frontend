import main from "merge";
import { LoginWith } from "./login/login-with";
import { Login } from "./login/normal-login";
import { Register } from "./register/page";
import { CreateUser } from "./register/create-user";

import { RegisterScreen } from "./register/page";
import { LoginScreen } from "./login/page";

export default function Home() {
  return (
    <LoginScreen />
  );
}
