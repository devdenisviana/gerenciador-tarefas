"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Estudar Next.js" },
    { id: 2, text: "Configurar banco de dados" },
    { id: 3, text: "Criar sistema de autenticação" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState("");

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
    <main className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white shadow-lg rounded-xl p-6"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Gerenciador de Tarefas</h1>

        {/* Botão de Adicionar Tarefa */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition mb-4"
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
                className="p-4 bg-gray-50 border rounded-lg flex justify-between items-center shadow-sm"
              >
                <span className="text-gray-800">{task.text}</span>
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
              className="bg-white p-6 rounded-lg shadow-lg w-96"
            >
              <h2 className="text-xl font-bold mb-4 text-gray-800">Nova Tarefa</h2>
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="w-full border p-2 rounded mb-4"
                placeholder="Digite a nova tarefa..."
              />
              <div className="flex justify-end space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-400 text-black rounded hover:bg-gray-500"
                >
                  Cancelar
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={addTask}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
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
