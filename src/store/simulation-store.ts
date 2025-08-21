import type { SimulationType, TalkType } from "@/types";
import { create } from "zustand";

type Event = {
  id: string;
  type: "talk" | "reaction" | "symptom";
  description: string;
  timestamp: string;
};

export type SimulationStore = {
  simulation?: SimulationType;
  addSimulation: (simulation: SimulationType) => void;
  lastSymptom?: string;
  lastReaction?: string;
  setLastSymptom: (symptom: string) => void;
  setLastReaction: (reaction: string) => void;
  events: {
    id: string;
    type: "talk" | "reaction" | "symptom";
    description: string;
    timestamp: string;
  }[];
  addEvent: (event: Event) => void;
  lastEvent?: Event;
  clearEvents: () => void;
  genericTalks: TalkType[];
  setGenericTalks: (talks: TalkType[]) => void;
};

export const useSimulationStore = create<SimulationStore>((set) => ({
  simulation: undefined,
  lastSymptom: "-",
  lastReaction: "-",
  addSimulation: (simulation: SimulationType) => set({ simulation }),
  setLastSymptom: (symptom: string) => set({ lastSymptom: symptom }),
  setLastReaction: (reaction: string) => set({ lastReaction: reaction }),
  addEvent: (event: Event) =>
    set((state) => ({ events: [...state.events, event], lastEvent: event })),
  clearEvents: () => set({ events: [] }),
  events: [],
  genericTalks: [],
  setGenericTalks: (talks: TalkType[]) => set({ genericTalks: talks }),
}));
