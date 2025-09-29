import { create } from "zustand";
import { CurrentUserData } from "@/types";

interface CurrentUserStore {
  user: CurrentUserData | null;
  setUser: (user: CurrentUserData) => void;
  clearUser: () => void;
}

export const useCurrentUserStore = create<CurrentUserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
