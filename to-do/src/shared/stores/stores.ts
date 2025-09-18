import { create } from 'zustand';

interface Store {
  list: string[];
  addItem: (item: string) => void;
  removeItem: (item: string) => void;
  reset: () => void;
}

export const useStore = create<Store>(set => ({
  list: [],
  addItem: (item: string) => set(state => ({ list: [...state.list, item] })),
  removeItem: (item: string) =>
    set(state => ({ list: state.list.filter(i => i !== item) })),
  reset: () => set({ list: [] }),
}));
