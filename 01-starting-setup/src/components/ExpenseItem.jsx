<<<<<<< HEAD:01-starting-setup/src/components/ExpenseItem.jsx
import "./ExpenseItem.css";

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
=======
function ExpenseItem() {
    return <h2>Expense item!</h2>
>>>>>>> d71f97c84a50ea477b2b6962c974fb8321b088a3:01-starting-setup/src/components/ExpenseItem.js
}

export default ExpenseItem;