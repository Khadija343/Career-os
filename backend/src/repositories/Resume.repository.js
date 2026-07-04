import Resume from "../models/Resume.model.js";

class ResumeRepository {

    /**
     * Create Resume
     */
    async createResume(resumeData) {
        return await Resume.create(resumeData);
    }

    /**
     * Find All Resumes by User
     */
    async findAllByUser(userId) {

        return await Resume.find({
            user: userId,
            isDeleted: false,
        }).sort({ createdAt: -1 });

    }

    /**
     * Find Active Resume by User
     */
    async findActiveByUser(userId) {

        return await Resume.findOne({
            user: userId,
            isActive: true,
            isDeleted: false,
        });

    }

    /**
     * Find Resume by ID
     */
    async findById(resumeId) {

        return await Resume.findOne({
            _id: resumeId,
            isDeleted: false,
        });

    }

    /**
     * Count Resumes by User
     */
    async countByUser(userId) {

        return await Resume.countDocuments({
            user: userId,
            isDeleted: false,
        });

    }

    /**
     * Deactivate All Resumes for User
     */
    async deactivateAllForUser(userId) {

        return await Resume.updateMany(
            {
                user: userId,
                isActive: true,
            },
            {
                isActive: false,
            }
        );

    }

    /**
     * Soft Delete Resume
     */
    async softDeleteResume(resumeId) {

        return await Resume.findByIdAndUpdate(
            resumeId,
            {
                isDeleted: true,
                isActive: false,
            },
            {
                new: true,
            }
        );

    }

}

export default new ResumeRepository();
