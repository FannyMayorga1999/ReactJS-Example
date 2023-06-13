import "./App.css";
import ExpenseItem from "./components/expense/ExpenseItem";
import React from "react";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  /** Creacion de un elemento  */
  return (
    <div className="App-body">
      <h2>Let's get started!</h2>
      {
        /** Iteracion de un array para el dibujo del los elementos  */
        expenses.map((element) => {
          return (
            <ExpenseItem
              title={element.title}
              amount={element.amount}
              date={element.date}
            ></ExpenseItem>
          );
        })
      }
    </div>
  );

  /** Creacion de un elemento  */
  /*
  return React.createElement(
    'div',
    {},
    React.createElement('h2',{},"Let's get started!"),
    React.createElement(ExpenseItem,{items:expenses})
  )*/
}

export default App;
