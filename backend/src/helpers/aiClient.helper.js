import ApiError from "../utils/ApiError.js";

const REQUEST_TIMEOUT_MS = 15000;

/**
 * POST a JSON payload to the FastAPI AI Service and return its parsed
 * JSON body. Centralizes every failure mode that can happen when
 * talking to an external HTTP service so the four public methods below
 * stay one-liners.
 *
 * @param {string} path - e.g. "/analyze-resume"
 * @param {object} payload
 * @throws {ApiError}
 *   503 if the service is unreachable (down, DNS failure, connection refused)
 *   504 if the request times out
 *   502 if the service responds with a non-OK status or a non-JSON body
 */
const postToAiService = async (path, payload) => {

    // Read lazily (not at module load) so tests/tools can override
    // AI_SERVICE_URL after this module has already been imported.
    const baseUrl = process.env.AI_SERVICE_URL || "http://localhost:8000";

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    let response;

    try {

        response = await fetch(`${baseUrl}${path}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload || {}),
            signal: controller.signal,
        });

    } catch (error) {

        if (error.name === "AbortError") {

            throw new ApiError(504, "AI service request timed out. Please try again.");

        }

        throw new ApiError(
            503,
            "AI service is currently unavailable. Please try again later."
        );

    } finally {

        clearTimeout(timeoutId);

    }

    let data;

    try {

        data = await response.json();

    } catch (error) {

        throw new ApiError(502, "AI service returned an invalid response.");

    }

    if (!response.ok) {

        const detail =
            typeof data?.detail === "string"
                ? data.detail
                : "AI service returned an error.";

        throw new ApiError(502, detail);

    }

    return data;

};

class AiClient {

    /**
     * POST /analyze-resume
     */
    async analyzeResume(payload) {
        return await postToAiService("/analyze-resume", payload);
    }

    /**
     * POST /career-roadmap
     */
    async generateCareerRoadmap(payload) {
        return await postToAiService("/career-roadmap", payload);
    }

    /**
     * POST /interview-questions
     */
    async generateInterviewQuestions(payload) {
        return await postToAiService("/interview-questions", payload);
    }

    /**
     * POST /chat
     */
    async chat(payload) {
        return await postToAiService("/chat", payload);
    }

}

export default new AiClient();
