import mongoose from "mongoose";
import path from "path";

import resumeRepository from "../repositories/Resume.repository.js";
import userRepository from "../repositories/User.repository.js";
import ApiError from "../utils/ApiError.js";

import { RESUME_STATUS } from "../constants/status.constants.js";

const MAX_RESUMES_PER_USER = 5;

class ResumeService {

    /**
     * Remove internal/sensitive fields before sending resume to client
     */
    sanitizeResume(resume) {

        return {
            id: resume._id,
            originalFileName: resume.originalFileName,
            fileType: resume.fileType,
            fileSize: resume.fileSize,
            status: resume.status,
            isActive: resume.isActive,
            createdAt: resume.createdAt,
            updatedAt: resume.updatedAt,
        };

    }

    /**
     * Ensure the resume exists and belongs to the requesting user
     */
    async getOwnedResumeOrFail(userId, resumeId) {

        if (!mongoose.Types.ObjectId.isValid(resumeId)) {

            throw new ApiError(400, "Invalid resume ID.");

        }

        const resume = await resumeRepository.findById(resumeId);

        if (!resume) {

            throw new ApiError(404, "Resume not found.");

        }

        if (resume.user.toString() !== userId.toString()) {

            throw new ApiError(
                403,
                "You do not have access to this resume."
            );

        }

        return resume;

    }

    /**
     * Upload Resume
     */
    async uploadResume(userId, file) {

        if (!file) {

            throw new ApiError(400, "Resume file is required.");

        }

        const resumeCount = await resumeRepository.countByUser(userId);

        if (resumeCount >= MAX_RESUMES_PER_USER) {

            throw new ApiError(
                400,
                `You can only store up to ${MAX_RESUMES_PER_USER} resumes. Please delete an existing resume first.`
            );

        }

        const fileType = path
            .extname(file.originalname)
            .toLowerCase()
            .replace(".", "");

        // The newly uploaded resume becomes the active one

        await resumeRepository.deactivateAllForUser(userId);

        const resume = await resumeRepository.createResume({
            user: userId,
            originalFileName: file.originalname,
            storedFileName: file.filename,
            filePath: file.path,
            fileType,
            fileSize: file.size,
            status: RESUME_STATUS.UPLOADED,
            isActive: true,
        });

        await userRepository.markProfileCompleted(userId);

        return this.sanitizeResume(resume);

    }

    /**
     * Get All Resumes for Logged-in User
     */
    async getResumesForUser(userId) {

        const resumes = await resumeRepository.findAllByUser(userId);

        return resumes.map((resume) => this.sanitizeResume(resume));

    }

    /**
     * Get Active Resume for Logged-in User
     */
    async getActiveResume(userId) {

        const resume = await resumeRepository.findActiveByUser(userId);

        if (!resume) {

            throw new ApiError(404, "No active resume found.");

        }

        return this.sanitizeResume(resume);

    }

    /**
     * Get Resume by ID
     */
    async getResumeById(userId, resumeId) {

        const resume = await this.getOwnedResumeOrFail(userId, resumeId);

        return this.sanitizeResume(resume);

    }

    /**
     * Delete Resume
     */
    async deleteResume(userId, resumeId) {

        await this.getOwnedResumeOrFail(userId, resumeId);

        await resumeRepository.softDeleteResume(resumeId);

        return { message: "Resume deleted successfully." };

    }

}

export default new ResumeService();
