"use client"; //indica que esse componente precisa rodar no cliente
import { useState } from "react"; //importa o hook do React que permite criar estados dentro do componente

//criando o componente Home
export default function Home() {
  // Estado para armazenar as tarefas
  //cria um estado chamado tasks que armazena a lista de tarefas
  const [tasks, setTasks] = useState([
    { id: 1, text: "Estudar Next.js" },
    { id: 2, text: "Configurar banco de dados" },
    { id: 3, text: "Criar sistema de autenticação" },
  ]);

  // Função para excluir uma tarefa
  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Função para editar uma tarefa (simples por enquanto)
  const editTask = (id: number) => {
    const newText = prompt("Edite a tarefa:");
    if (newText) {
      setTasks(tasks.map(task => (task.id === id ? { ...task, text: newText } : task)));
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Gerenciador de Tarefas</h1>

        {/* Lista de tarefas dinâmicas */}
        <ul className="space-y-3">
          {tasks.map(task => (
            <li key={task.id} className="p-3 bg-gray-200 rounded-lg flex justify-between items-center">
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
    </main>
  );
}
