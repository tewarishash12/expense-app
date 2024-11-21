import React, { useState } from 'react'
import { Category, Cost, Date, Expense } from './Input';

const ExpenseForm = ({ onSaveExpense }) => {
    const [idx, setIdx] = useState(0)
    const [expense, setExpense] = useState("");
    const [category, setCategory] = useState("");
    const [cost, setCost] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Submitted")
        setIdx(idx+1);
        onSaveExpense({ id:idx,  expense:expense, category:category, cost:cost, date:date  })
    }

    return (
        <form onSubmit={handleSubmit}>
            <Expense value={expense} onChange={setExpense} />
            <Category value={category} onChange={setCategory} />
            <Cost value={cost} onChange={setCost} />
            <Date value={date} onChange={setDate} />
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