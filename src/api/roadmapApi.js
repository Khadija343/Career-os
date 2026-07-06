import api from "./axios";

export const generateRoadmap = async (role) => {
  try {
    const response = await api.post("/roadmap/generate", { role });

    return response.data;
  } catch (error) {
    console.error("Roadmap Generation Error:", error);
    throw error;
  }
};