import { create } from "zustand";

export const useSearchStore = create((set) => ({
  searchValue: "",
  setSearchValue: () =>
    set((state: any) => ({ searchValue: state.searchValue })),
  resetSearchValue: () => set({ searchValue: "" }),
}));
