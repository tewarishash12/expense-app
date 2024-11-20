import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications
import Navbar from '../components/Navbar';

const Form = () => {
    const [expense, setExpense] = useState("");
    const [category, setCategory] = useState("");
    const [cost, setCost] = useState("");
    const [date, setDate] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const expenseData = {
            id: Date.now(),
            expense,
            category,
            cost: Number(cost),
            date
        };

        let storedData = JSON.parse(localStorage.getItem("expenses") || "[]");
        storedData.push(expenseData);
        localStorage.setItem("expenses", JSON.stringify(storedData));

        // Show success notification
        toast.success("Record saved successfully!");

        // Clear form fields
        setExpense("");
        setCategory("");
        setCost("");
        setDate("");
    };

    return (
        <>
            <Navbar/>
            <div
                className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-200 to-blue-400 relative"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
                    overflow: "hidden"
                }}
            >
                {/* Waves */}
                <div className="absolute top-0 left-0 w-full h-20 bg-white" style={{ clipPath: "polygon(0 50%, 25% 75%, 50% 50%, 75% 75%, 100% 50%, 100% 100%, 0 100%)" }}></div>

                {/* Form */}
                <form
                    onSubmit={onSubmit}
                    className="p-8 bg-white rounded-lg shadow-lg w-11/12 max-w-md relative"
                >
                    <h1 className="text-3xl font-bold text-orange-500 text-center mb-6">
                        Enter your Expenses
                    </h1>

                    {/* Expense Title */}
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2">
                            Expense Title:
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter expense title"
                            value={expense}
                            onChange={(e) => setExpense(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Expense Category */}
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2">
                            Category of Expense:
                        </label>
                        <select
                            required
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="" disabled hidden>
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
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2">
                            Cost:
                        </label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Enter expense"
                            value={cost}
                            onChange={(e) => setCost(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Expense Date */}
                    <div className="mb-6">
                        <label className="block text-gray-600 font-medium mb-2">
                            Expense Date:
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-bold py-2 rounded-lg hover:from-orange-500 hover:to-yellow-500 shadow-lg"
                    >
                        Submit
                    </button>
                </form>

                {/* Fish Decorations */}
                <div className="absolute bottom-10 left-5 text-blue-300 text-3xl">🐟</div>
                <div className="absolute bottom-16 right-8 text-blue-300 text-2xl">🐠</div>

                {/* Toast Container for notifications */}
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar
                    newestOnTop={true}
                    rtl={false}
                    pauseOnFocusLoss={false}
                    pauseOnHover={false}
                    theme="light" // You can change this theme to 'dark' if you prefer
                    style={{
                        zIndex: 9999, // Ensures the toast is above all other elements
                    }}
                />
            </div>
        </>
    );
};

export default Form;
