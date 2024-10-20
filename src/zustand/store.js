import { create } from "zustand";

const useStore = create((set) => ({
  activeSection: "Customers",
  setActiveSection: (section) => set(() => ({ activeSection: section })),
}));

export default useStore;
