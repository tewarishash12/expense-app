import React from 'react'

const ExpenseList = ({ expenses, handleDeleteExpense}) => {
    console.log(expenses);
    return (
        <ul>
            {expenses.map((expense, idx)=>(
                <li>
                    {expense.expense} - {expense.category} - {expense.cost} - {expense.date}
                    <button onClick={()=> handleDeleteExpense(idx)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default ExpenseList