import React, { useState, useEffect } from 'react';

const Form = () => {
    const [expense, setExpense] = useState("")
    const [category, setCategory] = useState("")
    const [cost, setCost] = useState("")
    const [date, setDate] = useState("")
    const [expensesList, setExpensesList] = useState([]);

    // Fetch expenses from localStorage when the component is mounted
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("expenses") || "[]");
        setExpensesList(storedData);
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');

        const expenseData = {
            expense,
            category,
            cost: Number(cost),
            date
        }

        let storedData = JSON.parse(localStorage.getItem("expenses") || "[]");
        storedData.push(expenseData);
        localStorage.setItem("expenses", JSON.stringify(storedData));

        // Update the local state to trigger re-render
        setExpensesList(storedData);

        // Clear form fields
        setExpense("");
        setCategory("");
        setCost("");
        setDate("");
    };

    return (
        <div className="container">
            <form
                onSubmit={onSubmit}
                className="h-full w-full flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md max-w-lg mx-auto"
            >
                <h1 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                    Enter your Expenses:
                </h1>

                {/* Expense Title */}
                <div className="mb-4 w-full">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                        Expense Title:
                    </label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter expense title"
                        value={expense}
                        onChange={(e) => setExpense(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-lg text-gray-800 dark:text-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Expense Category */}
                <div className="mb-4 w-full">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                        Category of Expense:
                    </label>
                    <select
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg text-gray-800 dark:text-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" selected disabled hidden>
                            Choose category of Expense
                        </option>
                        <option value="Grocery">Grocery</option>
                        <option value="Personal">Personal</option>
                        <option value="Medicines">Medicines</option>
                        <option value="Food">Food</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                {/* Expense Price */}
                <div className="mb-4 w-full">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                        Expense Price:
                    </label>
                    <input
                        type="number"
                        name="price"
                        placeholder="Enter expense"
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-lg text-gray-800 dark:text-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Expense Date */}
                <div className="mb-6 w-full">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                        Expense Date:
                    </label>
                    <input
                        type="date"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-lg text-gray-800 dark:text-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Submit
                </button>
            </form>

            {/* Display List of Expenses */}
            <div className="mt-8 w-full max-w-lg mx-auto">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-700">
                    List of Expenses:
                </h2>
                <ul className="mt-4 space-y-4">
                    {expensesList.map((expense, index) => (
                        <li
                            key={index}
                            className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm"
                        >
                            <p className="text-gray-800 dark:text-gray-200 font-semibold">{expense.expense}</p>
                            <p className="text-gray-600 dark:text-gray-400">Category: {expense.category}</p>
                            <p className="text-gray-600 dark:text-gray-400">Cost: ₹{expense.cost}</p>
                            <p className="text-gray-600 dark:text-gray-400">Date: {expense.date}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Form;
