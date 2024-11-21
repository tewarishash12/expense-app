import React from 'react'
import ExpenseForm from '../components/ExpenseForm'

const ExpenseFormPage = () => {

    const expenseData = localStorage.getItem('expense_record') || '[]';
    const expenses = JSON.parse(expenseData);

    const handleExpenseSave = (expense) =>{
        expenses.push(expense);
        const updatedString = JSON.stringify(expenses);
        localStorage.setItem("expense_record", updatedString);
    }

    return (
        <>
            <h1>Expense Tracker</h1>
            <ExpenseForm onSaveExpense={handleExpenseSave}/>
        </>
    )
}

export default ExpenseFormPage