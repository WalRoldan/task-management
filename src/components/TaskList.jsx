import React, { useState, useEffect } from "react";
import useTasks from "../hooks/useTasks";
import DeleteModal from "./DeleteModal";
import ModalTask from "./ModalTask";
import TaskCard from "./TaskCard";

export default function TaskList() {
  const {
    tasks,
    handleAddTask,
    handleUpdateTask,
    handleDelete,
    handleEditTask,
    toggleTaskStatus,
    isModalOpen,
    isModalDeleteOpen,
    handleConfirmDelete,
    handleCancelDelete,
    isEditModalOpen,
    taskToEdit,
    setTaskToEdit,
    setIsModalDeleteOpen,
    setIsEditModalOpen,
    setIsModalOpen,
    newTask,
    setNewTask,
    handleFilterChange,
  } = useTasks();

  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed === true;
    if (filter === "pending") return task.completed === false;
    return true;
  });

  useEffect(() => {
    handleFilterChange(filter);
  }, [filter, handleFilterChange]);

  return (
    <div className="min-h-screen bg-gradient-to-br rounded-lg from-gray-50 via-gray-100 to-gray-200 p-6">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center text-blue-700">
          Task Management System
        </h1>
        <div className="flex items-center gap-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-4 py-4"
          >
            <option value="all">All Tasks</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-5 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200 whitespace-nowrap"
          >
            + New Task
          </button>
        </div>
      </header>

      {filteredTasks.length === 0 ? (
        <p>No tasks available. Please add some tasks or change your filter.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              handleEditTask={handleEditTask}
              handleDelete={handleDelete}
              toggleTaskStatus={toggleTaskStatus}
            />
          ))}
        </div>
      )}

      {/* Modals */}
      <DeleteModal
        isOpen={isModalDeleteOpen}
        message="Are you sure you want to delete this task?"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
      <ModalTask
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        taskData={newTask}
        setTaskData={setNewTask}
        handleSave={handleAddTask}
        title="Create New Task"
      />
      <ModalTask
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        taskData={taskToEdit}
        setTaskData={setTaskToEdit}
        handleSave={handleUpdateTask}
        title="Edit Task"
      />
    </div>
  );
}
