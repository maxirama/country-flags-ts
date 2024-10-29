import { create } from "zustand";
export interface State {
  theme: string;
  setTheme: (value: string) => void;
}
export const useThemeStore = create<State>((set) => ({
  theme: "light",
  setTheme: (value) => set((state: any) => ({ theme: value })),
}));
