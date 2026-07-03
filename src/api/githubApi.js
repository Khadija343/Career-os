import api from "./axios";

export const analyzeGithub = async (username) => {
  const response = await api.get(`/github/${username}`);

  return response.data;
};