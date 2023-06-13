import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"

function ExpenseItem(props) {
  return (
    <Card className='expense-item'>
      <div className="col-4">
        <ExpenseDate date={props.date}/>
      </div>
      <div className="col-4">
        <h2 className="expense-item__description">{props.title}</h2>
      </div>
      <div className="col-4">
        <div className="expense-item__price col-3">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
