import { uploadResume, analyzeResume } from "../api/resumeApi";
import { analyzeGithub } from "../api/githubApi";
import { generateRoadmap } from "../api/roadmapApi";

const aiService = {
  uploadResume,
  analyzeResume,
  analyzeGithub,
  generateRoadmap,
};

export default aiService;