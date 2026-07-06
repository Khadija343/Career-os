import aiService from "../services/ai.service.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

class AiController {

    /**
     * Analyze Resume
     */
    analyzeResume = asyncHandler(async (req, res) => {

        const result =
            await aiService.analyzeResume(
                req.user.id,
                req.body
            );

        return res.status(200).json(

            new ApiResponse(
                200,
                result,
                "Resume analysis fetched successfully."
            )

        );

    });

    /**
     * Generate Career Roadmap
     */
    generateCareerRoadmap = asyncHandler(async (req, res) => {

        const result =
            await aiService.generateCareerRoadmap(
                req.user.id,
                req.body
            );

        return res.status(200).json(

            new ApiResponse(
                200,
                result,
                "Career roadmap fetched successfully."
            )

        );

    });

    /**
     * Generate Interview Questions
     */
    generateInterviewQuestions = asyncHandler(async (req, res) => {

        const result =
            await aiService.generateInterviewQuestions(
                req.user.id,
                req.body
            );

        return res.status(200).json(

            new ApiResponse(
                200,
                result,
                "Interview questions fetched successfully."
            )

        );

    });

    /**
     * Chat with Career Assistant
     */
    chat = asyncHandler(async (req, res) => {

        const result =
            await aiService.chat(
                req.user.id,
                req.body.message,
                req.body.conversationId
            );

        return res.status(200).json(

            new ApiResponse(
                200,
                result,
                "Chat response fetched successfully."
            )

        );

    });

}

export default new AiController();
