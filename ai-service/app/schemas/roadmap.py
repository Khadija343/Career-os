from pydantic import BaseModel, Field


class CareerRoadmapRequest(BaseModel):
    """
    Request body for POST /career-roadmap.

    Fields are optional placeholders for Phase 1 — no roadmap generation
    logic exists yet, so nothing here is validated beyond basic typing.
    """

    current_role: str | None = Field(default=None, description="User's current role (placeholder).")
    target_role: str | None = Field(default=None, description="User's target role (placeholder).")
    skills: list[str] = Field(default_factory=list, description="Known skills (placeholder).")
    experience_years: float | None = Field(default=None, description="Years of experience (placeholder).")


class CareerRoadmapResponse(BaseModel):
    """Response body for POST /career-roadmap."""

    message: str = Field(..., examples=["Career roadmap endpoint ready."])
