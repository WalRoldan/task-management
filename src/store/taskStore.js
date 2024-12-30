import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [],

  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),

  updateTask: (_id, updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) => (task._id === _id ? updatedTask : task)),
    })),

  deleteTask: (_id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task._id !== _id),
    })),

  clearTasks: () => set({ tasks: [] }),
}));

export default useTaskStore;
