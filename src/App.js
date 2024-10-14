import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import TodoBoard from './components/TodoBoard';


function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  const addItem = () => {
    setTodoList([...todoList, inputValue]);
    setInputValue(""); 
  };

  const formatDate = (date) => {
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'][date.getDay()]} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
  };

  return (
    <div className="container">
      <main>
        <h1>Today</h1>
        <DateText>{formatDate(currentTime)}</DateText>
        <div className="input-container">
          <input 
            value={inputValue}
            type="text" 
            onChange={(event) => setInputValue(event.target.value)} />
          <button onClick={addItem}>+</button>
        </div>
        <TodoBoard todoList={todoList}/>
      </main>
    </div>
  );
}

export default App;

const DateText = styled.div`
  width: 149px;
  height: 12px;
  color: #666666;
  font-size: 10px;
  font-weight: 400;
  word-wrap: break-word;
`;