import React from 'react'
import ExpenseForm from '../components/ExpenseForm'
import Navbar from "../components/Navbar"
import { useCallForm } from '../context/FormContext'

const ExpenseFormPage = () => {
    const {idx} = useCallForm();

    const handleExpenseSave = (newExpense) => {
        const expenses = JSON.parse(localStorage.getItem('expenses') || '[]');
    
        if (idx !== undefined && idx < expenses.length) {
            expenses[idx] = { id: idx, ...newExpense };
        } else {
            expenses.push({ id: expenses.length, ...newExpense });
        }
        localStorage.setItem('expenses', JSON.stringify(expenses));
    };
    
    
    

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
                    <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
                        Expense Tracker
                    </h1>
                    <ExpenseForm onSaveExpense={handleExpenseSave} />
                </div>
            </div>
        </>
    )
}

export default ExpenseFormPage