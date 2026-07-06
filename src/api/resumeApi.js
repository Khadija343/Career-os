import api from "./axios";

export const uploadResume = async (formData) => {
  try {
    const response = await api.post("/resume/upload", formData);

    return response.data;
  } catch (error) {
    console.error("Resume Upload Error:", error);
    throw error;
  }
};