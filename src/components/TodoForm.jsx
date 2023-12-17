import { useState } from "react";

const TodoForm = (props) => {
    const [inputTodo, setInputTodo] = useState('');
    const addTodo = props.onAdd;
    const { addWave } = props;
    const buttonHandleClick = event => {
        if (inputTodo.trim() != '') {
            addTodo(inputTodo);
            setInputTodo('');
            addWave();
        }
    };
    const handleInputKeyUp = event => {
        event.code === 'Enter'? buttonHandleClick() : null;
    }
    const handleInputChange = event => {
        setInputTodo(event.target.value);
    }

    return (
        <div className="todo__form">
            <input type="text" placeholder="add todo" value={inputTodo} onChange={handleInputChange} onKeyUp={handleInputKeyUp}/>
            <button type="button" onClick={buttonHandleClick}>add</button>
        </div>
    );
}

export default TodoForm;