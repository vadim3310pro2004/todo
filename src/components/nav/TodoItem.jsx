
const TodoItem = props => {
    const { text, onRemove, id } = props;
    const closeHundleClick = event => onRemove(id);

    return (
        <>
        <div className="todo__item__text">{text}</div>
        <button className="todo__item__close" onClick={closeHundleClick}>close</button>
        </>
    );
}

export default TodoItem;