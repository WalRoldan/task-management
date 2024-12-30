import axios from "axios";

const API_BASE_URL =
  "https://task-manager-backend-production-9728.up.railway.app/api/tasks";

export const fetchTasks = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching tasks");
  }
};

export const createTask = async (task) => {
  try {
    const response = await axios.post(API_BASE_URL, task);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error adding task");
  }
};

export const updateTaskDB = async (taskId, task) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${taskId}`, task);
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error updating task");
  }
};

export const deleteTaskDB = async (taskId) => {
  try {
    await axios.delete(`${API_BASE_URL}/${taskId}`);
  } catch (error) {
    console.error(error);
    throw new Error("Error deleting task");
  }
};
