import axios from "axios";

export function getAll() {
  const token = window.sessionStorage.getItem("token");
  return axios.get("/api/users", { headers: { Authentication: "Bearer " + token } }).then(resp => {
    return resp.data;
  });
}
