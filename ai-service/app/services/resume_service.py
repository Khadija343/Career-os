"""
Resume analysis service.

Phase 1 placeholder only — intentionally contains no parsing, scoring,
or LLM logic yet. Its only job right now is to exist as the seam
routers call into, so real analysis logic can be dropped in later
without touching the router or schema layers.
"""

from app.schemas.resume import ResumeAnalysisRequest, ResumeAnalysisResponse


class ResumeService:
    async def analyze_resume(self, payload: ResumeAnalysisRequest) -> ResumeAnalysisResponse:
        return ResumeAnalysisResponse(message="Resume analysis endpoint ready.")


resume_service = ResumeService()
