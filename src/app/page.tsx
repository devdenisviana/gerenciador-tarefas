export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Gerenciador de Tarefas</h1>

        {/* Lista de tarefas estática */}
        <ul className="space-y-3">
          <li className="p-3 bg-gray-200 rounded-lg">Estudar Next.js</li>
          <li className="p-3 bg-gray-200 rounded-lg">Configurar banco de dados</li>
          <li className="p-3 bg-gray-200 rounded-lg">Criar sistema de autenticação</li>
        </ul>
      </div>
    </main>
  );
}
