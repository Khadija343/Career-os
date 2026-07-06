import userRepository from "../repositories/User.repository.js";
import resumeRepository from "../repositories/Resume.repository.js";
import githubProfileRepository from "../repositories/GithubProfile.repository.js";

import resumeService from "./resume.service.js";
import dashboardService from "./dashboard.service.js";
import githubService from "./github.service.js";

import aiClient from "../helpers/aiClient.helper.js";
import ApiError from "../utils/ApiError.js";

class AiService {

    /**
     * Build the Structured AI Context Payload
     *
     * Gathers everything the AI layer currently knows about a user —
     * profile basics, active resume (parsed/structured if available),
     * dashboard analytics, and GitHub profile + analytics — into one
     * payload to hand to the FastAPI service.
     *
     * Missing *optional* context (no resume uploaded yet, no GitHub
     * connected) is represented as `null` rather than an error; only a
     * missing user account is fatal here.
     */
    async buildUserContext(userId) {

        const user = await userRepository.findById(userId);

        if (!user) {

            throw new ApiError(404, "User not found.");

        }

        const [activeResume, githubProfile, dashboardAnalytics] = await Promise.all([
            resumeRepository.findActiveByUser(userId),
            githubProfileRepository.findByUser(userId),
            dashboardService.getDashboard(userId),
        ]);

        // getGithubAnalytics() 404s when there's no connected profile —
        // only call it once we already know a profile exists.
        const githubAnalytics = githubProfile
            ? await githubService.getGithubAnalytics(userId)
            : null;

        return {
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                careerGoal: user.careerGoal,
            },
            resume: activeResume ? resumeService.sanitizeResume(activeResume) : null,
            dashboardAnalytics,
            githubProfile: githubProfile ? githubService.sanitizeProfile(githubProfile) : null,
            githubAnalytics,
        };

    }

    /**
     * Analyze Resume
     *
     * FastAPI currently returns a placeholder message — Node's job here
     * is only to assemble the context, call the service, and forward
     * whatever comes back.
     */
    async analyzeResume(userId) {

        const context = await this.buildUserContext(userId);

        return await aiClient.analyzeResume(context);

    }

    /**
     * Generate Career Roadmap
     */
    async generateCareerRoadmap(userId, requestOptions = {}) {

        const context = await this.buildUserContext(userId);

        return await aiClient.generateCareerRoadmap({
            ...context,
            ...requestOptions,
        });

    }

    /**
     * Generate Interview Questions
     */
    async generateInterviewQuestions(userId, requestOptions = {}) {

        const context = await this.buildUserContext(userId);

        return await aiClient.generateInterviewQuestions({
            ...context,
            ...requestOptions,
        });

    }

    /**
     * Chat with Career Assistant
     */
    async chat(userId, message, conversationId) {

        const context = await this.buildUserContext(userId);

        return await aiClient.chat({
            ...context,
            message,
            conversationId,
        });

    }

}

export default new AiService();
