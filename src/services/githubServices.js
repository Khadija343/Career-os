import api from "./axios";

export const analyzeGithub = async (username) => {
  try {
    const response = await api.get(`/github/analyze/${username}`);
    return response.data;
  } catch (error) {
    console.error("GitHub Analysis Error:", error);
    throw error;
  }
};