const userService = {
    getAllUsers: async () => {
        // Fazer puxar do banco de dados
        return [
            { id: 1, name: 'Vinícius', email: 'vinicius@example.com' }
        ];
    },

    createUser: async (user) => {
        // Implementar a lógica para criar um usuário no backend
        console.log('Usuário criado:', user);
    },

    deleteUser: async (id) => {
        // Implementar a lógica para excluir um usuário no backend
        console.log('Usuário deletado - ID:', id);
    },

    updateUser: async (id, user) => {
        // Implementar a lógica para atualizar um usuário no backend
        console.log('Usuário atualizado - ID:', id, user);
    },
};

export default userService;
