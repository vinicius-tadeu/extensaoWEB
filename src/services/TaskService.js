const taskService = {
    getAllTasks: async () => {
        // Lógica para obter todas as tarefas do banco de dados
        return [
            { id: 1, title: 'Completar o projeto', description: 'Terminar todas as tarefas pendentes do projeto.' }
        ];
    },

    createTask: async (task) => {
        // Lógica para criar uma nova tarefa no backend
        console.log('Tarefa criada:', task);
    },

    deleteTask: async (id) => {
        // Lógica para excluir uma tarefa no backend
        console.log('Tarefa deletada - ID:', id);
    },

    updateTask: async (id, task) => {
        // Lógica para atualizar uma tarefa no backend
        console.log('Tarefa atualizada - ID:', id, task);
    },
};

export default taskService;
