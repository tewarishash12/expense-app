import React, { useEffect, useState } from 'react';

const ExpenseRecords = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        // Retrieve data from localStorage when the component mounts
        const storedData = JSON.parse(localStorage.getItem("expenses") || "[]");
        setExpenses(storedData);
    }, []);

    return (
        <div
            className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-200 to-blue-400 relative"
            style={{
                clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
                overflow: "hidden",
            }}
        >
            {/* Waves */}
            <div
                className="absolute top-0 left-0 w-full h-20 bg-white"
                style={{
                    clipPath:
                        "polygon(0 50%, 25% 75%, 50% 50%, 75% 75%, 100% 50%, 100% 100%, 0 100%)",
                }}
            ></div>

            {/* Heading */}
            <h1 className="text-4xl font-bold mb-10 text-center text-orange-700">
                Expense Records
            </h1>

            {/* Table */}
            {expenses.length > 0 ? (
                <div className="w-11/12 max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white">
                                <th className="py-3 px-4 text-left font-medium">Expense Title</th>
                                <th className="py-3 px-4 text-left font-medium">Category</th>
                                <th className="py-3 px-4 text-left font-medium">Cost</th>
                                <th className="py-3 px-4 text-left font-medium">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map(({ id, expense, category, cost, date }, index) => (
                                <tr
                                    key={id}
                                    className={`${
                                        index % 2 === 0
                                            ? 'bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-600 dark:to-gray-500'
                                            : 'bg-gradient-to-r from-blue-200 to-blue-300 dark:from-gray-500 dark:to-gray-400'
                                    } hover:bg-gradient-to-r hover:from-orange-300 hover:to-yellow-300 dark:hover:from-gray-800 dark:hover:to-gray-900`}
                                >
                                    <td className="py-3 px-4 text-gray-900 dark:text-gray-100">
                                        {expense}
                                    </td>
                                    <td className="py-3 px-4 text-gray-900 dark:text-gray-100">
                                        {category}
                                    </td>
                                    <td className="py-3 px-4 text-gray-900 dark:text-gray-100">
                                        ₹{cost}
                                    </td>
                                    <td className="py-3 px-4 text-gray-900 dark:text-gray-100">
                                        {date}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-gray-700 dark:text-gray-300 text-center">
                    No expenses recorded yet.
                </p>
            )}

            {/* Fish Decorations */}
            <div className="absolute bottom-10 left-5 text-blue-300 text-3xl">🐟</div>
            <div className="absolute bottom-16 right-8 text-blue-300 text-2xl">🐠</div>
        </div>
    );
};

export default ExpenseRecords;
