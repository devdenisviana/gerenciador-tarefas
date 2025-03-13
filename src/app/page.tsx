"use client";
import { useState } from "react";

export default function Home() {
  // Estado da lista de tarefas
  const [tasks, setTasks] = useState([
    { id: 1, text: "Estudar Next.js" },
    { id: 2, text: "Configurar banco de dados" },
    { id: 3, text: "Criar sistema de autenticação" },
  ]);

  // Estado do modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Estado do texto da nova tarefa
  const [newTask, setNewTask] = useState("");

  // Função para adicionar uma nova tarefa
  const addTask = () => {
    if (newTask.trim() === "") return; // Evita tarefas vazias

    const newTaskObj = { id: tasks.length + 1, text: newTask };
    setTasks([...tasks, newTaskObj]);
    setNewTask(""); // Limpa o campo de input
    setIsModalOpen(false); // Fecha o modal
  };

  // Função para excluir uma tarefa
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Função para editar uma tarefa
  const editTask = (id: number) => {
    const newText = prompt("Edite a tarefa:");
    if (newText) {
      setTasks(tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)));
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Gerenciador de Tarefas</h1>

        {/* Botão para abrir o modal */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-green-500 text-white py-2 rounded mb-4 hover:bg-green-600 transition"
        >
          + Adicionar Tarefa
        </button>

        {/* Lista de tarefas */}
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="p-3 bg-gray-200 rounded-lg flex justify-between items-center"
            >
              <span>{task.text}</span>
              <div className="space-x-2">
                <button
                  onClick={() => editTask(task.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
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
            <h2 className="text-xl font-bold mb-4">Nova Tarefa</h2>
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
                className="px-4 py-2 bg-gray-400 rounded hover:bg-gray-500"
              >
                Cancelar
              </button>
              <button
                onClick={addTask}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
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
