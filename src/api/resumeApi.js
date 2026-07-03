import api from "./axios";

export const uploadResume = async (formData) => {
  const response = await api.post("/resume/upload", formData);
  return response.data;
};