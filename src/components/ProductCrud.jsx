import React, { useState, useEffect } from 'react';
import ProductService from '../services/ProductService';

const ProductCrud = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: 0 });
    const [editingProductId, setEditingProductId] = useState(null);
    const [editProduct, setEditProduct] = useState({ name: '', price: 0 });

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const data = await ProductService.getAllProducts();
        setProducts(data);
    };

    const createProduct = async () => {
        await ProductService.createProduct(newProduct);
        setNewProduct({ name: '', price: 0 });
        loadProducts();
    };

    const deleteProduct = async (id) => {
        await ProductService.deleteProduct(id);
        loadProducts();
    };

    const editProductForm = (product) => {
        setEditingProductId(product.id);
        setEditProduct({ name: product.name, price: product.price });
    };

    const updateProduct = async () => {
        await ProductService.updateProduct(editingProductId, editProduct);
        setEditingProductId(null);
        setEditProduct({ name: '', price: 0 });
        loadProducts();
    };

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.id === editingProductId ? (
                            <>
                                <input
                                    type="text"
                                    value={editProduct.name}
                                    onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
                                />
                                <input
                                    type="number"
                                    value={editProduct.price}
                                    onChange={(e) => setEditProduct({ ...editProduct, price: parseFloat(e.target.value) })}
                                />
                                <button onClick={updateProduct}>Update</button>
                            </>
                        ) : (
                            <>
                                {product.name} - ${product.price}
                                <br />
                                <button onClick={() => deleteProduct(product.id)}>Delete</button>
                                <button onClick={() => editProductForm(product)}>Edit</button>
                                <br />
                            </>
                        )}
                    </li>
                ))}
            </ul>
            <h2>Add Product</h2>
            <input
                type="text"
                placeholder="Name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <input
                type="number"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
            />
            <button onClick={createProduct}>Add Product</button>
        </div>
    );
};

export default ProductCrud;
