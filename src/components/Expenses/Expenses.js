import React from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = React.useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeDropdown={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />

      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
