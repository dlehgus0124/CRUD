import React from 'react';
import TodoItem from './TodoItem';

function TodoBoard({ todoList, onDeleteItem }) {
    return (
    <div>
        {todoList.map((item, index) => (
            <TodoItem 
            item={item} 
            key={index} 
            onDelete={() => onDeleteItem(index)} // 삭제 핸들러 전달
            />
        ))}
    </div>
    );
}

export default TodoBoard;