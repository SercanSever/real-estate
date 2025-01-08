import { create } from "zustand";
import apiRequest from "./api-request";

export const useNotificationStore = create((set) => ({
  number: 0,
  fetch: async () => {
    const res = await apiRequest("user/notifications");
    set({ number: res.data });
  },
  decrease: () => set((state) => ({ number: state.number - 1 })),
  reset: () => set({ number: 0 }),
}));
