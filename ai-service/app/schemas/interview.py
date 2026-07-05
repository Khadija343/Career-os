from pydantic import BaseModel, Field


class InterviewQuestionsRequest(BaseModel):
    """
    Request body for POST /interview-questions.

    Fields are optional placeholders for Phase 1 — no question
    generation logic exists yet, so nothing here is validated beyond
    basic typing.
    """

    job_role: str | None = Field(default=None, description="Target job role (placeholder).")
    experience_level: str | None = Field(
        default=None,
        description="e.g. 'entry', 'mid', 'senior' (placeholder).",
    )
    skills: list[str] = Field(default_factory=list, description="Relevant skills (placeholder).")


class InterviewQuestionsResponse(BaseModel):
    """Response body for POST /interview-questions."""

    message: str = Field(..., examples=["Interview questions endpoint ready."])
