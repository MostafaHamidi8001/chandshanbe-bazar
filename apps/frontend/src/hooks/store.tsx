import { create } from "zustand";

interface SearchStore {
  open: boolean;
  toggle: () => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  open: false,
  toggle: () => set((state) => ({ open: !state.open })),
}));

interface MobileNavbarStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export const useMobileNavbar = create<MobileNavbarStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
