import type { CardProps } from "../../../types/card";
import { Brain, Lightbulb, Award } from "lucide-react";

export const cardsData: Omit<CardProps, "">[] = [
  {
    icon: Brain,
    subtitle: "Revolutionary Thinker",
    body: "Transformed our understanding of space, time, and the universe itself",
  },
  {
    icon: Lightbulb,
    subtitle: "Scientific Genius",
    body: "Developed ground-breaking theories that continue to shape modern physics",
  },
  {
    icon: Award,
    subtitle: "Nobel Laureate",
    body: "Awarded the Nobel Prize in Physics for his work on the photoelectric effect",
  },
];
