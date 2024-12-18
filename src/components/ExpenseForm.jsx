import React from 'react'
import { Category, Cost, Date, Expense } from './Input';
import { useCallForm } from '../context/FormContext';

const ExpenseForm = () => {
    const {handleSubmit, expense, setExpense, category, setCategory, cost, setCost, date, setDate} = useCallForm();    

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
                <Expense value={expense} onChange={setExpense}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>
            <div className="mb-4">
                <Category value={category} onChange={setCategory}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>
            <div className="mb-4">
                <Cost value={cost} onChange={setCost}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>
            <div className="mb-6">
                <Date value={date} onChange={setDate}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-bold py-2 rounded-lg hover:from-orange-500 hover:to-yellow-500 shadow-lg"
            >
                Submit
            </button>
        </form>
    )
}

export default ExpenseForm