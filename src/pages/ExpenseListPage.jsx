import React, { useState } from 'react'
import ExpenseList from '../components/ExpenseList';
import { useNavigate } from 'react-router-dom';

const ExpenseListPage = ({ setIdx, setExpense, setCategory, setCost, setDate }) => {
    const navigate = useNavigate();

    const [expenses, setExpenses] = useState(() => {
        const expenseString = localStorage.getItem("expenses");
        return expenseString ? JSON.parse(expenseString) : [];
    })

    const handleDeleteExpense = (idx) => {
        const updation = expenses.filter((_, i) => { return i !== idx; })
        setExpenses(updation);
        localStorage.setItem("expenses", JSON.stringify(updation));
    }

    const handleUpdateExpense = (idx) => {
        const expense = expenses[idx];
        setIdx(idx);
        setExpense(expense.expense)
        setCategory(expense.category)
        setCost(expense.cost)
        setDate(expense.date)
        navigate('/addexpense');
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    Expense List
                </h1>
                <ExpenseList expenses={expenses} handleDeleteExpense={handleDeleteExpense} handleUpdateExpense={handleUpdateExpense} />
            </div>
        </div>
    )
}

export default ExpenseListPage