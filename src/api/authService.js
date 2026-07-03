import api from "./axios";

export function login(data) {
  return api.post("/auth/login", data);
}

export function getProfile() {
  return api.get("/auth/profile", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}

export function updateProfile(data) {
  return api.put("/auth/profile", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}