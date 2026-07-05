"""
Interview question generation service.

Phase 1 placeholder only — intentionally contains no question-generation
or LLM logic yet. Its only job right now is to exist as the seam
routers call into, so real logic can be dropped in later without
touching the router or schema layers.
"""

from app.schemas.interview import InterviewQuestionsRequest, InterviewQuestionsResponse


class InterviewService:
    async def generate_questions(self, payload: InterviewQuestionsRequest) -> InterviewQuestionsResponse:
        return InterviewQuestionsResponse(message="Interview questions endpoint ready.")


interview_service = InterviewService()
