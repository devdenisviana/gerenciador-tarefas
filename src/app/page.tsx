"use client";
import { useState } from "react";

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
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Gerenciador de Tarefas</h1>

        {/* Botão de Adicionar Tarefa */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition mb-4"
        >
          + Adicionar Tarefa
        </button>

        {/* Lista de Tarefas */}
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="p-4 bg-gray-50 border rounded-lg flex justify-between items-center shadow-sm"
            >
              <span className="text-gray-800">{task.text}</span>
              <div className="space-x-2">
                <button
                  onClick={() => editTask(task.id)}
                  className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500"
                >
                  Editar
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal de Adicionar Tarefa */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Nova Tarefa</h2>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="w-full border p-2 rounded mb-4"
              placeholder="Digite a nova tarefa..."
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-400 text-black rounded hover:bg-gray-500"
              >
                Cancelar
              </button>
              <button
                onClick={addTask}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
