function TodoList({ todos }) {
    return (
        <ul className="TodoList">
            {todos.map((todo) => (
                <ToDoListItem
                    todo={todo}
                    key={todo.id}
                />
            ))}
        </ul>
    );
}