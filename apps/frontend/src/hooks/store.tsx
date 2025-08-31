import { create } from "zustand";


interface SearchStore {
  open: boolean;
  toggle: () => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  open: false,
  toggle: () => set((state) => ({ open: !state.open })),
}));
