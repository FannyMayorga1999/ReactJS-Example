import "./ExpenseDate.css"

function ExpenseDate(props) {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString("en-Us", { month: "long" });
    const days = props.date.toLocaleString("en-Us", { day: "2-digit" });
  
    return(
    <div className="col-12 expense-date">
        <div className="expense-date__year"> {year} </div>
        <div className="expense-date__month" > {month} </div>
        <div className="expense-date__day" > {days} </div>
    </div>
    )
}

export default ExpenseDate;