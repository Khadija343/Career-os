import ApiError from "../utils/ApiError.js";

const GITHUB_API_BASE_URL = "https://api.github.com";

/**
 * Fetch a public GitHub user's profile via the official REST API.
 * Only ever reads GET /users/:username — no repositories, no writes.
 *
 * Uses Node's built-in fetch (Node 18+) so no extra HTTP client
 * dependency is needed. An optional GITHUB_TOKEN env var is sent as a
 * bearer token when present, raising the otherwise very low (60/hr)
 * unauthenticated rate limit — Milestone 1 works fine without it.
 *
 * @param {string} username
 * @returns {Promise<object>} Raw GitHub user object.
 * @throws {ApiError} 404 if the user doesn't exist, 429 if rate
 * limited, 502 for any other unreachable/unexpected API failure.
 */
const fetchGithubUser = async (username) => {

    const headers = {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "career-os-app",
    };

    if (process.env.GITHUB_TOKEN) {
        headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    let response;

    try {

        response = await fetch(
            `${GITHUB_API_BASE_URL}/users/${encodeURIComponent(username)}`,
            { headers }
        );

    } catch (error) {

        throw new ApiError(502, "Unable to reach GitHub right now. Please try again later.");

    }

    if (response.status === 404) {
        throw new ApiError(404, `GitHub user "${username}" does not exist.`);
    }

    if (response.status === 403 || response.status === 429) {
        throw new ApiError(429, "GitHub API rate limit exceeded. Please try again later.");
    }

    if (!response.ok) {
        throw new ApiError(502, "Failed to fetch GitHub profile. Please try again later.");
    }

    return await response.json();

};

export default fetchGithubUser;
