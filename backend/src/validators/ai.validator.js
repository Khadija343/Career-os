import { z } from "zod";

/*
|--------------------------------------------------------------------------
| Career Roadmap
|--------------------------------------------------------------------------
| Every field is optional — the bulk of the AI payload is assembled
| server-side from the user's stored resume/GitHub/dashboard data. These
| are just extra hints the user can supply on top of that context.
*/

export const careerRoadmapSchema = z.object({

    currentRole: z.string().trim().max(100).optional(),
    targetRole: z.string().trim().max(100).optional(),
    skills: z.array(z.string().trim()).optional(),

});

/*
|--------------------------------------------------------------------------
| Interview Questions
|--------------------------------------------------------------------------
*/

export const interviewQuestionsSchema = z.object({

    jobRole: z.string().trim().max(100).optional(),
    experienceLevel: z.string().trim().max(50).optional(),
    skills: z.array(z.string().trim()).optional(),

});

/*
|--------------------------------------------------------------------------
| Chat
|--------------------------------------------------------------------------
| `message` is the one field that actually matters for a chat turn, so
| unlike the others it's required.
*/

export const chatSchema = z.object({

    message: z
        .string()
        .trim()
        .min(1, "Message is required.")
        .max(2000, "Message cannot exceed 2000 characters."),

    conversationId: z.string().trim().optional(),

});
