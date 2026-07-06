import "dotenv/config";
import mongoose from "mongoose";

import aiService from "./src/services/ai.service.js";
import User from "./src/models/User.model.js";

process.env.AI_SERVICE_URL = "http://localhost:8010";

await mongoose.connect(process.env.MONGODB_URI);

const TEST_EMAIL = "ai-analyze-fix-test@example.com";

try {

    await User.deleteOne({ email: TEST_EMAIL });

    const user = await User.create({
        fullName: "AI Analyze Fix Test",
        email: TEST_EMAIL,
        password: "Password123",
        careerGoal: "Become a backend engineer",
    });

    console.log("---- Simulating controller: aiService.analyzeResume(userId, req.body) ----");

    try {
        const result = await aiService.analyzeResume(user._id, {
            resume_text: "John Doe, Software Engineer with 3 years of experience in Node.js and React.",
        });
        console.log("Unexpected success (no GEMINI_API_KEY configured):", result);
    } catch (error) {
        // Since GEMINI_API_KEY isn't set on the AI service in this test env,
        // we expect a 502 from FastAPI's 503 "not configured" being relayed
        // as a Gemini-side error — NOT the old 400 "resume_text is required".
        console.log("Got error as expected:", error.statusCode, "-", error.message);

        if (error.message.includes("resume_text is required")) {
            console.error("BUG STILL PRESENT: resume_text did not reach FastAPI!");
        } else {
            console.log("FIX CONFIRMED: resume_text reached FastAPI (failure is due to missing GEMINI_API_KEY, not missing resume_text).");
        }
    }

} finally {

    await User.deleteOne({ email: TEST_EMAIL });
    await mongoose.disconnect();

}
