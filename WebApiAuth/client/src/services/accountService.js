import axios from "axios";
axios.defaults.headers.common["Authorization"] = "Bearer " + window.sessionStorage.getItem("token") || "";

const toUrlEncoded = obj =>
  Object.keys(obj)
    .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]))
    .join("&");

export function login(loginReq) {
  loginReq.grant_type = "password";
  loginReq.userName = loginReq.email;
  const req = toUrlEncoded(loginReq);
  loginReq.grant_type = "password";
  return axios.post("/Token", req, { headers: { "Content-Type": "application/x-www-form-urlencoded" } }).then(resp => {
    return resp.data;
  });
}

export function register(registerReq) {
  return axios.post("/api/account/register", registerReq).then(resp => {
    return resp.data;
  });
}

export function getUserInfo() {
  return axios.get("/api/account/userinfo").then(resp => resp.data);
}
