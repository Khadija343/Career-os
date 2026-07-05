"""
Career roadmap generation service.

Phase 1 placeholder only — intentionally contains no roadmap-building
or LLM logic yet. Its only job right now is to exist as the seam
routers call into, so real logic can be dropped in later without
touching the router or schema layers.
"""

from app.schemas.roadmap import CareerRoadmapRequest, CareerRoadmapResponse


class RoadmapService:
    async def generate_roadmap(self, payload: CareerRoadmapRequest) -> CareerRoadmapResponse:
        return CareerRoadmapResponse(message="Career roadmap endpoint ready.")


roadmap_service = RoadmapService()
