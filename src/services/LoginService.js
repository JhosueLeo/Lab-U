import axios from "../AuthUser";

const {http, deleteToken, setToken} = axios()

const login = (data) => {
  return http.post("/login-particular", data);
};
const logout = () => {
  return deleteToken();
};
const setTokenLogin = (data, persona_id) => {
  return setToken(data, persona_id);
};
const my = () => {
  console.log("myyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
  return http.post("/my");
};

const changePassword = (data) => {
  return http.post("/changePassword", data);
};
const getToken = () => {
  return getToken();
};
const LoginService = {
  login,
  logout,
  setTokenLogin,
  my,
  changePassword,
  getToken,
};
export default LoginService;
