import React, { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

const Provider = ({ children }) => {
  const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initialTasks);
  const [answer, setAnswer] = useState(false)

  const addTask = (item) => {
    const newItem = {
      title: item.title,
      description: item.description,
      date: {
        day: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
      },
    };
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
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, clearTasks, answer, setAnswer }}>
      {children}
    </TaskContext.Provider>
  );
};

export default Provider;