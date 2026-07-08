import api from "./axios";

export function login(data) {
  return api.post("/auth/login", data);
}

export function getProfile() {
  return api.get("/auth/profile");
}

export function updateProfile(data) {
  return api.put("/auth/profile", data);
}
