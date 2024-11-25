import React from 'react'
import ExpenseForm from '../components/ExpenseForm'
import Navbar from "../components/Navbar"

const ExpenseFormPage = ({ idx, setIdx, expense, setExpense, category, setCategory, cost, setCost, date, setDate }) => {

    const handleExpenseSave = (updateExpense, idx) => {
        const expenseData = localStorage.getItem('expenses') || '[]';
        const expenses = JSON.parse(expenseData);
        if (idx !== undefined) {
            expenses[idx] = updateExpense;
        }
        else {
            expenses.push(updateExpense);
        }
        const updatedString = JSON.stringify(expenses);
        localStorage.setItem("expenses", updatedString);
    }

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
                    <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
                        Expense Tracker
                    </h1>
                    <ExpenseForm onSaveExpense={handleExpenseSave}
                        idx={idx} setIdx={setIdx}
                        expense={expense} setExpense={setExpense}
                        category={category} setCategory={setCategory}
                        cost={cost} setCost={setCost}
                        date={date} setDate={setDate}
                    />
                </div>
            </div>
        </>
    )
}

export default ExpenseFormPage