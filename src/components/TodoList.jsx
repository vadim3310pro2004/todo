import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
    const { addWave, removeWave } = props;
    const clases = props.isShow? '': 'todo_hiden';
    const [todos, setTodos] = useState([]);
    const addTodo = newTodo => setTodos([...todos, newTodo]); 
    const removeTodo = (id) => {
        setTodos(todos.filter((item, key) => key !=id));
        removeWave();
    };

    return (<ul className={`todo ${clases}`}>
        <li>
            <TodoForm addWave={addWave} onAdd={addTodo} />
        </li>
        {todos.map((item, id) => (
            <li key={id} className="todo__item">
                <TodoItem id={id} text={item} onRemove={removeTodo} />
            </li>
        ))}
    </ul>);
};

export default TodoList;