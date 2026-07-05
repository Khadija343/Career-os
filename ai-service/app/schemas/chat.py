from pydantic import BaseModel, Field


class ChatRequest(BaseModel):
    """
    Request body for POST /chat.

    Fields are optional placeholders for Phase 1 — no chat/LLM logic
    exists yet, so nothing here is validated beyond basic typing.
    """

    message: str | None = Field(default=None, description="User's chat message (placeholder).")
    conversation_id: str | None = Field(
        default=None,
        description="ID used to group messages into a conversation (placeholder).",
    )


class ChatResponse(BaseModel):
    """Response body for POST /chat."""

    message: str = Field(..., examples=["Career assistant endpoint ready."])
