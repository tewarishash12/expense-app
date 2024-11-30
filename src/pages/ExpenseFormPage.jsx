import React from 'react'
import ExpenseForm from '../components/ExpenseForm'
import Navbar from "../components/Navbar"
import { useCallForm } from '../context/FormContext'

const ExpenseFormPage = () => {
    const {handleExpenseSave} = useCallForm();    

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