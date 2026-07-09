// TODO: Replace this entire file with real API integration once the backend
// exposes Interview Preparation endpoints (e.g. via src/api/interviewApi.js
// following the same pattern as roadmapApi.js / githubApi.js / resumeApi.js).
//
// Suggested backend contract:
//   GET /api/v1/interview/technical-questions
//   GET /api/v1/interview/behavioral-questions
//   GET /api/v1/interview/coding-challenges
//   GET /api/v1/interview/preparation-tips
//
// import api from "../api/axios";

const MOCK_DELAY_MS = 600;

const simulateRequest = (data) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(data), MOCK_DELAY_MS);
  });

const TECHNICAL_QUESTIONS = [
  {
    id: "tq-1",
    question: "What is the difference between var, let, and const in JavaScript?",
    category: "JavaScript",
    difficulty: "Easy",
  },
  {
    id: "tq-2",
    question: "Explain how the virtual DOM works in React and why it improves performance.",
    category: "React",
    difficulty: "Medium",
  },
  {
    id: "tq-3",
    question: "What are database indexes and how do they affect query performance?",
    category: "Databases",
    difficulty: "Medium",
  },
  {
    id: "tq-4",
    question: "Design a rate limiter for a public REST API. What trade-offs would you consider?",
    category: "System Design",
    difficulty: "Hard",
  },
];

const BEHAVIORAL_QUESTIONS = [
  {
    id: "bq-1",
    question: "Tell me about a time you disagreed with a teammate. How did you resolve it?",
    category: "Teamwork",
    difficulty: "Easy",
  },
  {
    id: "bq-2",
    question: "Describe a project where you had to meet a tight deadline. What did you do?",
    category: "Time Management",
    difficulty: "Medium",
  },
  {
    id: "bq-3",
    question: "Tell me about a time you failed. What did you learn from it?",
    category: "Self Awareness",
    difficulty: "Hard",
  },
];

const CODING_CHALLENGES = [
  {
    id: "cc-1",
    title: "Two Sum",
    difficulty: "Easy",
    description: "Given an array of integers, return indices of the two numbers that add up to a target value.",
    tags: ["Arrays", "Hash Map"],
  },
  {
    id: "cc-2",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    description: "Find the length of the longest substring without repeating characters.",
    tags: ["Strings", "Sliding Window"],
  },
  {
    id: "cc-3",
    title: "Merge K Sorted Lists",
    difficulty: "Hard",
    description: "Merge k sorted linked lists into one sorted linked list and return it.",
    tags: ["Linked List", "Heap"],
  },
];

const PREPARATION_TIPS = [
  {
    id: "pt-1",
    title: "Research the company",
    description: "Understand the company's product, mission, and recent news before the interview.",
  },
  {
    id: "pt-2",
    title: "Practice out loud",
    description: "Talk through your solutions verbally, not just in your head, to build clear communication.",
  },
  {
    id: "pt-3",
    title: "Use the STAR method",
    description: "Structure behavioral answers with Situation, Task, Action, and Result.",
  },
  {
    id: "pt-4",
    title: "Review your fundamentals",
    description: "Revisit core data structures, algorithms, and system design basics a day before.",
  },
];

// TODO: Replace with: const res = await api.get("/interview/technical-questions"); return res.data;
export const getTechnicalQuestions = async () => {
  return simulateRequest(TECHNICAL_QUESTIONS);
};

// TODO: Replace with: const res = await api.get("/interview/behavioral-questions"); return res.data;
export const getBehavioralQuestions = async () => {
  return simulateRequest(BEHAVIORAL_QUESTIONS);
};

// TODO: Replace with: const res = await api.get("/interview/coding-challenges"); return res.data;
export const getCodingChallenges = async () => {
  return simulateRequest(CODING_CHALLENGES);
};

// TODO: Replace with: const res = await api.get("/interview/preparation-tips"); return res.data;
export const getPreparationTips = async () => {
  return simulateRequest(PREPARATION_TIPS);
};

const interviewService = {
  getTechnicalQuestions,
  getBehavioralQuestions,
  getCodingChallenges,
  getPreparationTips,
};

export default interviewService;
