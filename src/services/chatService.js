// TODO: Replace this entire file with real API integration once the backend
// exposes AI Career Assistant Chat endpoints (e.g. via src/api/chatApi.js
// following the same pattern as roadmapApi.js / githubApi.js / resumeApi.js).
//
// Suggested backend contract:
//   POST /api/v1/chat/message   { message, history }  -> { reply }
//   DELETE /api/v1/chat/session                        -> clears server-side history
//
// import api from "../api/axios";

const MOCK_REPLY_DELAY_MS = 1200;

const MOCK_REPLIES = [
  "That's a great question. Based on typical career paths, I'd suggest focusing on strengthening the fundamentals first, then building a couple of portfolio projects.",
  "You could highlight that experience in your resume's summary section, and back it up with a measurable achievement in the bullet points.",
  "Consider practicing this with a mock interview. Structuring your answer with the STAR method usually helps a lot.",
  "It might help to break that goal into smaller weekly milestones so you can track progress on your roadmap.",
];

const pickMockReply = () => MOCK_REPLIES[Math.floor(Math.random() * MOCK_REPLIES.length)];

/**
 * Sends a chat message to the AI Career Assistant.
 * @param {string} message - The latest user message.
 * @param {Array<{role: "user"|"assistant", content: string}>} history - Prior conversation turns.
 * @returns {Promise<{reply: string}>}
 */
// TODO: Replace with: const res = await api.post("/chat/message", { message, history }); return res.data;
export const sendMessage = async (message, history = []) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ reply: pickMockReply() });
    }, MOCK_REPLY_DELAY_MS);
  });
};

/**
 * Clears the conversation on the backend (e.g. server-side session/history).
 * @returns {Promise<void>}
 */
// TODO: Replace with: await api.delete("/chat/session");
export const clearConversation = async () => {
  return Promise.resolve();
};

const chatService = {
  sendMessage,
  clearConversation,
};

export default chatService;
