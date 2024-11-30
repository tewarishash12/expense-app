import React from 'react'
import ExpenseList from '../components/ExpenseList';
import Navbar from "../components/Navbar"

const ExpenseListPage = () => {

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
                    <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
                        Expense List
                    </h1>
                    <ExpenseList />
                </div>
            </div>
        </>
    )
}

export default ExpenseListPage