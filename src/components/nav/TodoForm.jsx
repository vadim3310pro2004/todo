import { useState } from "react";

const randomColor = () => `rgb(${Math.round(Math.random()*155+100)}, ${Math.round(Math.random()*155+100)}, ${Math.round(Math.random()*155+100)})`;

const TodoForm = (props) => {
    const [inputTodo, setInputTodo] = useState('');
    const addTodo = props.onAdd;
    const { addWave } = props;
    const buttonHandleClick = event => {
        if (inputTodo.trim() != '') {
            addTodo(inputTodo);
            setInputTodo('');
            addWave(randomColor());
        }
    };
    const handleInputKeyUp = event => {
        // event.code === 'Enter'? buttonHandleClick() : null;
        if (event.key === 'Enter' || event.keyCode === 13) {
            buttonHandleClick();
        }
    }
    const handleInputChange = event => {
        setInputTodo(event.target.value);
    }

    return (
        <div className="todo__form">
            <input type="text" placeholder="add todo" value={inputTodo} onChange={handleInputChange} onKeyDown={handleInputKeyUp}/>
            {/* <input type="text" placeholder="add todo" value={inputTodo} onChange={handleInputChange} onKeyUp={handleInputKeyUp}/> */}
            <button type="button" onClick={buttonHandleClick}>add</button>
        </div>
    );
}

export default TodoForm;