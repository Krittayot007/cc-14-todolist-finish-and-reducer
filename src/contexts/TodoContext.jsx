import { useState, useEffect, createContext } from "react";
import * as TodoAPIServices from '../services/todoServices'

// Create context => Context Object (NAME) ใช้ได้ 2 ที่
// #1 Provider : Wrapper Component => share Data, Logic ได้ 
// #2 Consumer : Component ที่ตเองการใช้ Data, Logic (Subcribe Component)
export const TodoContext = createContext();


// สร้าง Provider : Wrapper Component
function TodoContextProvider (props) {

    const [todos, setTodos] = useState([]);
    const [todosFilter, setTodosFilter] = useState([]);


    async function fetchAllTodo() {
        try {
            // let response = await axios({
            //     method: 'get',
            //     url: 'http://localhost:8080/todos',
            // });

            // #1 : Sync with External Service
            const response =  await TodoAPIServices.getAllTodo()

            // #2 : Sync with Internal State
            setTodos(response.data.todos);
            setTodosFilter(response.data.todos);
        } catch (error) {

            // #3 Error handler
            console.log(error.response.status);
        }
    }

    const addTodo = async (task) => {
        try {
            // #1 Sync With External State/Service : Database
            const now = new Date().toISOString().slice(0, 10);
            const newTodoObj = { task: task, status: false, date: now };
            // const response = await axios.post('http://localhost:8080/todos', newTodoObj);
            const response = await TodoAPIServices.createTodo(newTodoObj)
            const createdTodoObj = response.data.todo;

            // #2 Sync with Internal State : UI State
            const newTodoLists = [createdTodoObj, ...todos];
            // NOTE : not concern about time yet! todo for today can appear in next 7 days lists
            setTodos(newTodoLists);
            setTodosFilter(newTodoLists);
        } catch (error) {
            // #3 Error Handler eg. modal Error, Sweat Alert
            console.log(error.response.data);
        }
    };

    useEffect(() => {
        fetchAllTodo();
    } ,[])

    const sharedObj = {magic: 42, todos, todosFilter, addTodo}
    // return jsx
    return (
        <TodoContext.Provider value={sharedObj}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;