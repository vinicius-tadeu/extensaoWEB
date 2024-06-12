const productService = {
    getAllProducts: async () => {
        // Lógica para obter todos os produtos do banco de dados
        return [
            { id: 1, name: 'Produto A', price: 10.99 },
            { id: 2, name: 'Produto B', price: 20.49 },
            { id: 3, name: 'Produto C', price: 5.99 }
        ];
    },

    createProduct: async (product) => {
        // Lógica para criar um novo produto no backend
        console.log('Produto criado:', product);
    },

    deleteProduct: async (id) => {
        // Lógica para excluir um produto no backend
        console.log('Produto deletado - ID:', id);
    },

    updateProduct: async (id, product) => {
        // Lógica para atualizar um produto no backend
        console.log('Produto atualizado - ID:', id, product);
    },
};

export default productService;
