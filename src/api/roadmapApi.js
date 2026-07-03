import api from "./axios";

export const generateRoadmap = async (role) => {
  const response = await api.post("/roadmap", {
    role,
  });

  return response.data;
};