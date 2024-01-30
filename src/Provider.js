import React, { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

const Provider = ({ children }) => {
  const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (item) => {
    const newItem = { title: item.title, description: item.description };
    const newTasks = [...tasks, newItem];
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const clearTasks = () => {
    setTasks([]);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, clearTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export default Provider;
