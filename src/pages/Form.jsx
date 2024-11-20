import React, { useState } from 'react';

const Form = () => {
    const [expense, setExpense] = useState("")
    const [category, setCategory] = useState("")
    const [cost, setCost] = useState("")
    const [date, setDate] = useState("")

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

        setExpense("");
        setCategory("");
        setCost("");
        setDate("");
    };

    return (
        <div className="container h-screen flex flex-col align-center justify-center">
            <form
                onSubmit={onSubmit}
                className="h-full w-full flex flex-col justify-center items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md max-w-lg mx-auto"
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
        </div>
    );
};

export default Form;
