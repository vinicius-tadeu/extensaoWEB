import React, { useState, useEffect } from 'react';
import UserService from '../services/UserService';
import TaskCrud from './TaskCrud';

const UserCrud = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', email: '' });
    const [editingUserId, setEditingUserId] = useState(null);
    const [editUser, setEditUser] = useState({ name: '', email: '' });

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const data = await UserService.getAllUsers();
        setUsers(data);
    };

    const createUser = async () => {
        await UserService.createUser(newUser);
        setNewUser({ name: '', email: '' });
        loadUsers();
    };

    const deleteUser = async (id) => {
        await UserService.deleteUser(id);
        loadUsers();
    };

    const editUserForm = (user) => {
        setEditingUserId(user.id);
        setEditUser({ name: user.name, email: user.email });
    };

    const updateUser = async () => {
        await UserService.updateUser(editingUserId, editUser);
        setEditingUserId(null);
        setEditUser({ name: '', email: '' });
        loadUsers();
    };

    return (
        <div>
            <h2>Lista de usuários</h2>
            <ul>
                {users.map((user) => (
                    <>
                    <li key={user.id}>
                        {user.id === editingUserId ? (
                            <>
                                <input
                                    type="text"
                                    value={editUser.name}
                                    onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                                />
                                <input
                                    type="text"
                                    value={editUser.email}
                                    onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                                />
                                <button onClick={updateUser}>Update</button>
                            </>
                        ) : (
                            <>
                                {user.name} - {user.email}
                                <br />
                                <button onClick={() => deleteUser(user.id)}>Deletar</button>
                                <button onClick={() => editUserForm(user)}>Editar</button>
                                <br />
                            </>
                        )}
                    </li>
                    </>
                ))}
            </ul>
            <h2>Adicionar usuário</h2>
            <input
                type="text"
                placeholder="Nome"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="E-mail"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
            <button onClick={createUser}>Adicionar usuário</button>
        </div>
    );
};

export default UserCrud;
