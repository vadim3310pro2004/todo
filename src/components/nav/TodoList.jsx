import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeWave } from "../../store/wavesSlice";

import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";


const TodoList = props => {
    const dispatch = useDispatch();
    const [todos, setTodos] = useState([]);
    const clases = props.isShow? '': 'todo_hiden';

    const addTodo = newTodo => setTodos([...todos, newTodo]); 

    const removeTodo = (id) => {
        setTodos(todos.filter((item, key) => key !=id));
        dispatch(removeWave());
    };

    return (<ul className={`todo ${clases}`}>
        <li>
            <TodoForm onAdd={addTodo} />
        </li>
        {todos.map((item, id) => (
            <li key={id} className="todo__item">
                <TodoItem id={id} text={item} onRemove={removeTodo} />
            </li>
        ))}
    </ul>);
};

export default TodoList;