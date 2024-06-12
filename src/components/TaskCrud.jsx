import React, { useState, useEffect } from 'react';
import TaskService from '../services/TaskService';

const TaskCrud = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: '', description: '' });
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editTask, setEditTask] = useState({ title: '', description: '' });

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const data = await TaskService.getAllTasks();
        setTasks(data);
    };

    const createTask = async () => {
        await TaskService.createTask(newTask);
        setNewTask({ title: '', description: '' });
        loadTasks();
    };

    const deleteTask = async (id) => {
        await TaskService.deleteTask(id);
        loadTasks();
    };

    const editTaskForm = (task) => {
        setEditingTaskId(task.id);
        setEditTask({ title: task.title, description: task.description });
    };

    const updateTask = async () => {
        await TaskService.updateTask(editingTaskId, editTask);
        setEditingTaskId(null);
        setEditTask({ title: '', description: '' });
        loadTasks();
    };

    return (
        <div>
            <h2>Lista de Tarefas</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.id === editingTaskId ? (
                            <>
                                <input
                                    type="text"
                                    value={editTask.title}
                                    onChange={(e) => setEditTask({ ...editTask, title: e.target.value })}
                                />
                                <input
                                    type="text"
                                    value={editTask.description}
                                    onChange={(e) => setEditTask({ ...editTask, description: e.target.value })}
                                />
                                <button onClick={updateTask}>Update</button>
                            </>
                        ) : (
                            <>
                                {task.title} - {task.description}
                                <br />
                                <button onClick={() => deleteTask(task.id)}>Delete</button>
                                <button onClick={() => editTaskForm(task)}>Edit</button>
                                <br />
                            </>
                        )}
                    </li>
                ))}
            </ul>
            <h2>Add Task</h2>
            <input
                type="text"
                placeholder="Title"
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            />
            <input
                type="text"
                placeholder="Description"
                value={newTask.description}
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            />
            <button onClick={createTask}>Add Task</button>
        </div>
    );
};

export default TaskCrud;
