import { dynasties } from "../data/dynasties";
import { rulers } from "../data/rulers";
import { achievements } from "../data/achievements";
import { events } from "../data/events";

import type { DynastyDetail } from "../types/views";
import type { Dynasty } from "../types/dynasty";

export const dynastyService = {
  async getAllPublished(): Promise<Dynasty[]> {
    return dynasties
      .filter((dynasty) => dynasty.status === "published")
      .sort((a, b) => a.order - b.order);
  },

  async getBySlug(slug: string): Promise<DynastyDetail | null> {
    const dynasty = dynasties.find(
      (item) => item.slug === slug && item.status === "published",
    );

    if (!dynasty) return null;

    const dynastyRulers = rulers
      .filter(
        (ruler) =>
          dynasty.rulerIds.includes(ruler.id) && ruler.status === "published",
      )
      .sort((a, b) => a.order - b.order);

    const dynastyAchievements = achievements.filter(
      (item) =>
        dynastyRulers.some((ruler) => ruler.id === item.rulerId) &&
        item.status === "published",
    );

    const dynastyEvents = events.filter(
      (item) => item.dynastyId === dynasty.id && item.status === "published",
    );

    return {
      ...dynasty,
      rulers: dynastyRulers,
      achievements: dynastyAchievements,
      events: dynastyEvents,
    };
  },
};
