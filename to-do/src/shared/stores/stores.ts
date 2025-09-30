import { create } from 'zustand';

interface Task {
  id: string;
  name: string;
}

interface Store {
  list: Task[];
  addItem: (name: string) => void;
  removeItem?: (id: string) => void;
  reset: () => void;
}

export const useStore = create<Store>()(set => ({
  list: [],
  addItem: (name: string) =>
    set(state => ({
      list: [...state.list, { id: Date.now().toString(), name }],
    })),
  removeItem: (id: string) =>
    set(state => ({ list: state.list.filter(task => task.id !== id) })),
  reset: () => set({ list: [] }),
}));
