const TodoComponent = (props) => {
    return <li><span className="todoLabel">TODO:</span> {props.item}</li>;
}

const TodoListComponent = (props) => {
    const todoList = ["task_A", "task_B", "task_C", "task_D"];
    return (
        <ul className="todoList">
            {todoList.map(todoElement => <TodoComponent key={todoElement} item={todoElement} />)}
        </ul>
    );
}

ReactDOM.render(<TodoListComponent />, document.getElementById("react-exp-props"));