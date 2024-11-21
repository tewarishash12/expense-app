import React from 'react'
import ExpenseForm from '../components/ExpenseForm'

const ExpenseFormPage = () => {

    const expenseData = localStorage.getItem('expenses') || '[]';
    const expenses = JSON.parse(expenseData);

    const handleExpenseSave = (expense) =>{
        expenses.push(expense);
        const updatedString = JSON.stringify(expenses);
        localStorage.setItem("expenses", updatedString);
    }

    return (
        <>
            <h1>Expense Tracker</h1>
            <ExpenseForm onSaveExpense={handleExpenseSave}/>
        </>
    )
}

export default ExpenseFormPage