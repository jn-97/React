import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
/* 
파일 이름은 무조건 대문자로 시작 (소문자로 시작하는 요소는 내장된 html 요소이기 때문이다.)
단어와 단어를 연결하는 단어 역시 대문자로 작성
*/
function ExpenseItem(props) { 
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>   
      </div>
    </div>
  );
}

// ExpenseItem 컴포넌트를 사용하기 위해 이 함수를 이 파일의 기본함수로 내보낸다.
export default ExpenseItem; 
// export 했기 때문에 다른 파일에서 import해서 갖다 쓸수 있게 됨