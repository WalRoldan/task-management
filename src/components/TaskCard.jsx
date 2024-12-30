import React from "react";
import {
  PencilIcon,
  TrashIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { formatDate } from "../utils/formatters";

const TaskCard = ({ task, handleEditTask, handleDelete, toggleTaskStatus }) => {
  return (
    <div
      className={`bg-white shadow-md rounded-xl p-6 border-l-4 ${
        task.completed === true ? "border-green-500" : "border-yellow-500"
      } transition-transform transform hover:scale-105 hover:shadow-lg`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">{task.title}</h2>
        <div className="flex space-x-3">
          <button
            onClick={() => toggleTaskStatus(task._id)}
            className="h-6 w-6 text-green-500 hover:text-green-700 cursor-pointer transition-colors duration-200"
          >
            {task.completed === true ? <XMarkIcon /> : <CheckIcon />}
          </button>
          <PencilIcon
            className="h-6 w-6 text-indigo-500 hover:text-indigo-700 cursor-pointer transition-colors duration-200"
            onClick={() => handleEditTask(task)}
          />
          <TrashIcon
            className="h-6 w-6 text-red-500 hover:text-red-700 cursor-pointer transition-colors duration-200"
            onClick={() => handleDelete(task._id)}
          />
        </div>
      </div>
      <p className="text-gray-600 text-sm">{task.description}</p>
      <div className="mt-6 flex justify-between items-center">
        <span className="text-sm font-medium text-gray-500">
          {formatDate(task.createdAt) || "Date not available"}
        </span>
        <span
          className={`px-4 py-1 text-sm font-medium rounded-full ${
            task.completed === true
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {task.completed === true ? "Completed" : "Pending"}
        </span>
      </div>
    </div>
  );
};
export default TaskCard;
