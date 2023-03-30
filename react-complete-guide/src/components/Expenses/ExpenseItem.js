import React, { useState} from 'react';
// 컴포넌트 함수가 다시 호출되는 곳에서 변경된 값을 반영하기 위함 => useState
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
/* 
파일 이름은 무조건 대문자로 시작 (소문자로 시작하는 요소는 내장된 html 요소이기 때문이다.)
단어와 단어를 연결하는 단어 역시 대문자로 작성
*/
function ExpenseItem(props) { 
  const [title, setTitle] = useState(props.title); //훅 => 무조건 함수 안에서 호출되어야 함
  
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>   
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

// ExpenseItem 컴포넌트를 사용하기 위해 이 함수를 이 파일의 기본함수로 내보낸다.
export default ExpenseItem; 
// export 했기 때문에 다른 파일에서 import해서 갖다 쓸수 있게 됨