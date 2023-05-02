import Myaxios from './axiosConfig';

export const getAllTodos = async () => await Myaxios.get('/todos');

export const createTodo = async (newTodoObj) => await Myaxios.post('/todos', newTodoObj);

export const updateTodo = async (updateTodoObj) =>
    await Myaxios.put(`/todos/${updateTodoObj.id}`, updateTodoObj);

export const deleteTodo = async (todoId) => await Myaxios.delete(`todos/${todoId}`);
