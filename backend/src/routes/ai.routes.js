import express from "express";

import aiController from "../controllers/ai.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import validate from "../middleware/validation.middleware.js";

import {
    careerRoadmapSchema,
    interviewQuestionsSchema,
    chatSchema,
} from "../validators/ai.validator.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| All AI Routes Require Authentication
|--------------------------------------------------------------------------
*/

router.use(authMiddleware);

// Analyze Resume

router.post(
    "/analyze-resume",
    aiController.analyzeResume
);

// Generate Career Roadmap

router.post(
    "/career-roadmap",
    validate(careerRoadmapSchema),
    aiController.generateCareerRoadmap
);

// Generate Interview Questions

router.post(
    "/interview-questions",
    validate(interviewQuestionsSchema),
    aiController.generateInterviewQuestions
);

// Chat with Career Assistant

router.post(
    "/chat",
    validate(chatSchema),
    aiController.chat
);

export default router;
