import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map((expenses) => (
        <ExpenseItem title={expenses.title} amount={expenses.amount} date={expenses.date} />
      ))}
      <ExpenseItem />
    </div>
  );
}

export default Expenses;
