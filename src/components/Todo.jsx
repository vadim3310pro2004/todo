import { useState } from "react";
import TodoButton from "./TodoButton";
import TodoList from "./TodoList";

const Todo = (props) => {
    const [showTodo, setShowTodo] = useState(false);
    const todoButtonHandleClick = event => setShowTodo(!showTodo);
    const { addWave, removeWave } = props;

    return (
        <>
        <TodoButton onClick={todoButtonHandleClick}/>
        <TodoList isShow={showTodo} addWave={addWave} removeWave={removeWave} />
        </>
    );
}

export default Todo;