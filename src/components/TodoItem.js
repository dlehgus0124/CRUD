import React, { useState } from 'react';
import styled from 'styled-components';

function TodoItem({ item, onDelete }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
};

    return (
    <TodoItemContainer className={isChecked ? 'checked' : ''}>
        <input 
            type="checkbox" 
            checked={isChecked} 
            onChange={handleCheckboxChange} 
        />
        <span>{item}</span>
        <DeleteButton onClick={onDelete}>x</DeleteButton> {/* 삭제 버튼 추가 */}
    </TodoItemContainer>
    );
}

export default TodoItem;

const TodoItemContainer = styled.div`
    &.checked span {
        color: gray; /* 체크된 아이템의 색상 변경 */
        text-decoration: line-through; /* 체크된 아이템에 취소선 추가 */
    }
`;

const DeleteButton = styled.button`
    margin-left: 10px; /* 삭제 버튼과 텍스트 사이의 간격 */
    background-color: white;
    color: black;
    border: none;
    padding: 5px;
    cursor: pointer;
`;