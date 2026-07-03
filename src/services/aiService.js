import { uploadResume } from "../api/resumeApi";
import { analyzeGithub } from "../api/githubApi";
import { generateRoadmap } from "../api/roadmapApi";

const aiService = {
  uploadResume,
  analyzeGithub,
  generateRoadmap,
};

export default aiService;