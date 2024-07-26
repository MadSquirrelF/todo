import { create } from "zustand";

import type { ITask } from "@/types/task.interface";

interface TaskStore {
  tasks: ITask[];
  taskToEdit: ITask | null;
  modalStep: "create" | "update" | null;
  changeModalStep: (step: "create" | "update" | null) => void;
  createTask: (task: ITask) => void;
  updateTask: (id: string, updatedTask: Partial<ITask>) => void;
  deleteTask: (id: string) => void;
  setTaskToEdit: (task: ITask | null) => void;
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],

  modalStep: null,

  taskToEdit: null,

  changeModalStep: (step: "create" | "update" | null) =>
    set({ modalStep: step }),

  createTask: (task: ITask) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),

  updateTask: (id: string, updatedTask: Partial<ITask>) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task,
      ),
    })),

  deleteTask: (id: string) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),

  setTaskToEdit: (task) => set({ taskToEdit: task }),
}));

export default useTaskStore;
