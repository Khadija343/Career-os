from pydantic import BaseModel, Field


class ResumeAnalysisRequest(BaseModel):
    """
    Request body for POST /analyze-resume.

    Fields are optional placeholders for Phase 1 — no analysis logic
    exists yet, so nothing here is validated beyond basic typing.
    """

    resume_id: str | None = Field(
        default=None,
        description="ID of the resume in the main backend (placeholder, unused for now).",
    )
    resume_text: str | None = Field(
        default=None,
        description="Raw extracted resume text to analyze (placeholder, unused for now).",
    )


class ResumeAnalysisResponse(BaseModel):
    """Response body for POST /analyze-resume."""

    message: str = Field(..., examples=["Resume analysis endpoint ready."])
