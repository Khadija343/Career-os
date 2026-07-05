import githubProfileRepository from "../repositories/GithubProfile.repository.js";
import ApiError from "../utils/ApiError.js";
import fetchGithubUser from "../helpers/githubApi.helper.js";

class GithubService {

    /**
     * Remove internal/sensitive fields before sending profile to client
     */
    sanitizeProfile(profile) {

        return {
            id: profile._id,
            username: profile.username,
            avatarUrl: profile.avatarUrl,
            profileUrl: profile.profileUrl,
            bio: profile.bio,
            publicRepos: profile.publicRepos,
            followers: profile.followers,
            following: profile.following,
            company: profile.company,
            location: profile.location,
            blog: profile.blog,
            githubCreatedAt: profile.githubCreatedAt,
            lastSyncedAt: profile.lastSyncedAt,
            createdAt: profile.createdAt,
            updatedAt: profile.updatedAt,
        };

    }

    /**
     * Map GitHub's raw REST API user object onto our schema's fields.
     */
    mapGithubUserToProfile(githubUser) {

        return {
            username: githubUser.login,
            avatarUrl: githubUser.avatar_url || "",
            profileUrl: githubUser.html_url || "",
            bio: githubUser.bio || "",
            publicRepos: githubUser.public_repos || 0,
            followers: githubUser.followers || 0,
            following: githubUser.following || 0,
            company: githubUser.company || "",
            location: githubUser.location || "",
            blog: githubUser.blog || "",
            githubCreatedAt: githubUser.created_at ? new Date(githubUser.created_at) : null,
            lastSyncedAt: new Date(),
        };

    }

    /**
     * Connect GitHub Account
     *
     * Fetches the given username's public profile from the official
     * GitHub REST API and stores it against the logged-in user. A user
     * may only have one GitHub connection, and a given GitHub username
     * may only be linked to one Career OS account.
     */
    async connectGithub(userId, username) {

        const existingConnection = await githubProfileRepository.findByUser(userId);

        if (existingConnection) {

            throw new ApiError(
                409,
                "A GitHub account is already connected. Disconnect it before connecting a different one."
            );

        }

        const githubUser = await fetchGithubUser(username);

        const usernameAlreadyLinked = await githubProfileRepository.findByUsername(githubUser.login);

        if (usernameAlreadyLinked) {

            throw new ApiError(
                409,
                "This GitHub account is already connected to another user."
            );

        }

        try {

            const profile = await githubProfileRepository.createProfile({
                user: userId,
                ...this.mapGithubUserToProfile(githubUser),
            });

            return this.sanitizeProfile(profile);

        } catch (error) {

            // Guards against a race condition between the existence
            // checks above and the actual insert (duplicate key on
            // `user` or `username`'s unique indexes).
            if (error.code === 11000) {

                throw new ApiError(
                    409,
                    "This GitHub account is already connected."
                );

            }

            throw error;

        }

    }

    /**
     * Get Connected GitHub Profile for Logged-in User
     */
    async getProfile(userId) {

        const profile = await githubProfileRepository.findByUser(userId);

        if (!profile) {

            throw new ApiError(404, "No GitHub account connected yet.");

        }

        return this.sanitizeProfile(profile);

    }

}

export default new GithubService();
