import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWave } from "../../store/wavesSlice";


const TodoForm = props => {
    const [inputTodo, setInputTodo] = useState('');
    const dispatch = useDispatch();
    const addTodo = props.onAdd;

    const buttonHandleClick = event => {
        if (inputTodo.trim() != '') {
            addTodo(inputTodo);
            setInputTodo('');
            dispatch(addWave());
        }
    };
    
    const handleInputKeyUp = event => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            buttonHandleClick();
        }
    };
    
    const handleInputChange = event => {
        setInputTodo(event.target.value);
    };

    return (
        <div className="todo__form">
            <input type="text" placeholder="add todo" value={inputTodo} onChange={handleInputChange} onKeyDown={handleInputKeyUp} />
            <button type="button" onClick={buttonHandleClick}>add</button>
        </div>
    );
}

export default TodoForm;