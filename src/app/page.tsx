"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Estudar Next.js" },
    { id: 2, text: "Configurar banco de dados" },
    { id: 3, text: "Criar sistema de autenticação" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", !darkMode);
    setDarkMode(!darkMode);
  };

  const addTask = () => {
    if (newTask.trim() === "") return;
    const newTaskObj = { id: tasks.length + 1, text: newTask };
    setTasks([...tasks, newTaskObj]);
    setNewTask("");
    setIsModalOpen(false);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id: number) => {
    const newText = prompt("Edite a tarefa:");
    if (newText) {
      setTasks(tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)));
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 flex items-center justify-center transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
          Gerenciador de Tarefas
        </h1>

        {/* Botão de Adicionar Tarefa */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition mb-4"
        >
          + Adicionar Tarefa
        </motion.button>

        {/* Lista de Tarefas */}
        <ul className="space-y-3">
          <AnimatePresence>
            {tasks.map((task) => (
              <motion.li
                key={task.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
                className="p-4 bg-gray-50 dark:bg-gray-700 border dark:border-gray-600 rounded-lg flex justify-between items-center shadow-sm"
              >
                <span className="text-gray-800 dark:text-gray-200">{task.text}</span>
                <div className="space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => editTask(task.id)}
                    className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500"
                  >
                    Editar
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Excluir
                  </motion.button>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </motion.div>

      {/* Modal de Adicionar Tarefa */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96"
            >
              <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Nova Tarefa
              </h2>
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="w-full border dark:border-gray-600 p-2 rounded mb-4 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                placeholder="Digite a nova tarefa..."
              />
              <div className="flex justify-end space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-400 dark:bg-gray-600 text-black dark:text-white rounded hover:bg-gray-500 dark:hover:bg-gray-700"
                >
                  Cancelar
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={addTask}
                  className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600"
                >
                  Adicionar
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}