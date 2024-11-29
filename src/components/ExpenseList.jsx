import React from 'react'

const ExpenseList = ({ expenses, handleDeleteExpense, handleUpdateExpense }) => {
    console.log("ExpenseList",expenses)

    return (
        <ul className="space-y-4">
            {expenses.map((expense, idx) => (
                <li
                    className="bg-gray-50 p-4 rounded-lg shadow flex justify-between items-center"
                >
                    <div className="text-gray-800">
                        <p className="font-bold">{expense.expense}</p>
                        <p className="text-sm text-gray-600">
                            {expense.category} | ₹{expense.cost} | {expense.date}
                        </p>
                    </div>
                    <div className="space-x-2">
                        <button onClick={() => handleUpdateExpense(idx)}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Update
                        </button>
                        <button onClick={() => handleDeleteExpense(idx)}
                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default ExpenseList