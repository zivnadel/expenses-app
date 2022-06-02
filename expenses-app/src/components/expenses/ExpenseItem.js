import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <div>
          <ExpenseDate date={props.date}></ExpenseDate>
        </div>
        <div>
          <h2 className="expense-item__description">{props.title}</h2>
        </div>
        <div className="expense-item__price">{props.amount}$</div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
