// 사용자 지정 컴포넌트 임포트 하기
import ExpenseItem from "./components/ExpenseItem";

function App() {
    return (
        <div>
            <h2>Let's get started!</h2>
            <ExpenseItem></ExpenseItem>
        </div>
    );
}
/* 
자바스크립트 안에 html 코드를 가지고 있음
JSX code = 자바스크립트 XML 을 의미함
*/
export default App;
