import data from "./data.json";
import { Brain, Lightbulb, Award } from "lucide-react";
import type { CardProps } from "../types/card";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Lightbulb,
  Award,
};

interface CardData {
  id: number;
  icon: string;
  subtitle: string;
  body: string;
}

export const cardsData: CardProps[] = (data.cards as CardData[]).map(
  (card) => ({
    icon: iconMap[card.icon],
    subtitle: card.subtitle,
    body: card.body,
  }),
);
