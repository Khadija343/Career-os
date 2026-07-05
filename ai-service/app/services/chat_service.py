"""
Career assistant chat service.

Phase 1 placeholder only — intentionally contains no conversation,
retrieval, or LLM logic yet. Its only job right now is to exist as the
seam routers call into, so real logic (RAG, memory, etc.) can be dropped
in later without touching the router or schema layers.
"""

from app.schemas.chat import ChatRequest, ChatResponse


class ChatService:
    async def send_message(self, payload: ChatRequest) -> ChatResponse:
        return ChatResponse(message="Career assistant endpoint ready.")


chat_service = ChatService()
