import { useState, useEffect } from "react";
import useTaskStore from "../store/taskStore";

import {
  fetchTasks,
  createTask,
  deleteTaskDB,
  updateTaskDB,
} from "../services/taskService";
import { toast } from "react-toastify";

const useTasks = () => {
  const { tasks, addTask, updateTask, deleteTask, clearTasks } = useTaskStore();
  const [loading, setLoading] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "",
    status: "",
  });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const loadTasks = async () => {
      setLoading(true);
      try {
        clearTasks();
        const fetchedTasks = await fetchTasks(filter);
        fetchedTasks.forEach((task) => addTask(task));
      } catch (error) {
        console.error(error);
        toast.error("Error fetching tasks");
      } finally {
        setLoading(false);
      }
    };
    loadTasks();
  }, [addTask, filter]);

  const handleAddTask = async () => {
    if (!newTask.title) {
      toast.error("Title is required!");
      return;
    }
    if (!newTask.description) {
      toast.error("Description is required!");
      return;
    }
    try {
      const task = await createTask(newTask);
      addTask(task);
      setNewTask({ title: "", description: "", priority: "", status: "to-do" });
      setIsModalOpen(false);
      toast.success("Task added successfully");
    } catch (error) {
      console.error("Error adding task:", error);
      toast.error("Error adding task");
    }
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setIsEditModalOpen(true);
  };

  const handleUpdateTask = async () => {
    try {
      const response = await updateTaskDB(taskToEdit._id, taskToEdit);
      updateTask(taskToEdit._id, response);
      setIsEditModalOpen(false);
      toast.success("Task updated successfully");
    } catch (error) {
      console.error("Error updating task:", error);
      toast.error("Error updating task");
    }
  };

  const handleDelete = (taskId) => {
    setTaskToDelete(taskId);
    setIsModalDeleteOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (taskToDelete) {
      try {
        deleteTaskDB(taskToDelete);
        deleteTask(taskToDelete);
        toast.success("Task deleted successfully");
      } catch (error) {
        console.error("Error deleting task:", error);
        toast.error("Error deleting task");
      }
    }
    setTaskToDelete(null);
    setIsModalDeleteOpen(false);
  };

  const handleCancelDelete = () => {
    setIsModalDeleteOpen(false);
    setTaskToDelete(null);
  };

  const toggleTaskStatus = async (taskId) => {
    try {
      const task = tasks.find((t) => t._id === taskId);
      if (task) {
        const newStatus = task.completed ? false : true;
        const updatedTask = await updateTaskDB(taskId, {
          completed: newStatus,
        });
        updateTask(taskId, updatedTask);
        toast.success(`Task marked as ${newStatus}`);
      }
    } catch (error) {
      console.error("Error toggling task status:", error);
      toast.error("Error updating task status");
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return {
    tasks,
    loading,
    handleAddTask,
    handleUpdateTask,
    handleDelete,
    handleConfirmDelete,
    handleCancelDelete,
    handleEditTask,
    isModalOpen,
    isModalDeleteOpen,
    isEditModalOpen,
    taskToEdit,
    setTaskToEdit,
    setIsEditModalOpen,
    setIsModalDeleteOpen,
    setIsModalOpen,
    newTask,
    setNewTask,
    toggleTaskStatus,
    handleFilterChange,
  };
};

export default useTasks;
