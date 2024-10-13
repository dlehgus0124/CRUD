import axios from 'axios';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  const todoItems = [
    'to-do item 1',
    'to-do item 2',
    'to-do item 3',
    'to-do item 4',
    'to-do item 5',
  ];
  useEffect(() => {
    axios.get('http://localhost:3001')
      .then(res => {
        setData(res.data);
      })

      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 60000); // Update every minute
  
      return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'][date.getDay()]} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
  };
  return (
    <Container>
      <Title>Today</Title>
      <DateText>{formatDate(currentTime)}</DateText>

      {todoItems.map((item, index) => (
        <TodoItemContainer key={index}>
          <Checkbox />
          <TodoText>{item}</TodoText>
        </TodoItemContainer>
      ))}

      <AddButtonContainer>
        <AddButtonBackground />
        <AddButtonText>Add item</AddButtonText>
        <AddButtonIcon src="https://via.placeholder.com/12x12" alt="add" />
      </AddButtonContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
  display: flex;
  border: 1px solid #d9d9d9; /* Add this line for the border */
  padding: 10px; /* Optional: Add padding for spacing inside the container */
  border-radius: 5px; /* Optional: Add rounded corners */
`;

const Title = styled.div`
  width: 94px;
  height: 37px;
  color: black;
  font-size: 30px;
  font-family: 'NEXON Lv1 Gothic', sans-serif;
  font-weight: 400;
  word-wrap: break-word;
`;

const DateText = styled.div`
  width: 149px;
  height: 12px;
  color: #666666;
  font-size: 10px;
  font-family: 'NEXON Lv1 Gothic', sans-serif;
  font-weight: 400;
  word-wrap: break-word;
`;

const TodoItemContainer = styled.div`
  width: 147px;
  height: 17px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
`;

const Checkbox = styled.div`
  width: 17px;
  height: 17px;
  border-radius: 9999px;
  border: 1px #d9d9d9 solid;
`;

const TodoText = styled.div`
  width: 120px;
  height: 13px;
  color: black;
  font-size: 12px;
  font-family: 'NEXON Lv1 Gothic', sans-serif;
  font-weight: 400;
  word-wrap: break-word;
`;

const AddButtonContainer = styled.div`
  width: 89px;
  height: 24px;
  position: relative;
`;

const AddButtonBackground = styled.div`
  width: 89px;
  height: 24px;
  left: 0;
  top: 0;
  position: absolute;
  border-radius: 3px;
`;

const AddButtonText = styled.div`
  left: 29px;
  top: 5px;
  position: absolute;
  color: black;
  font-size: 12px;
  font-family: 'NEXON Lv1 Gothic', sans-serif;
  font-weight: 400;
  word-wrap: break-word;
`;

const AddButtonIcon = styled.img`
  width: 12px;
  height: 12px;
  left: 6px;
  top: 6px;
  position: absolute;
`;

