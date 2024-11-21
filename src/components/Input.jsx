import React from "react";

export const Expense = ({ value, onChange }) => {
    return (
        <>
            <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-2">
                    Expense Title:
                </label>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter expense title"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </>
    )
}

const categories = ["Grocery", "Personal", "Medicines", "Food", "Others"]

export const Category = ({ value, onChange }) => {
    return (
        <>
            <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-2">
                    Category of Expense:
                </label>
                <select
                    required
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                >
                    <option value="" disabled hidden>
                        Choose category of Expense
                    </option>
                    {categories.map((category) => (
                        <option value={category}>{category}</option>
                    ))}
                </select>
            </div>
        </>
    )
}

export const Cost = ({ value, onChange }) => {
    return (
        <>
            <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-2">
                    Cost:
                </label>
                <input
                    type="number"
                    name="price"
                    placeholder="Enter expense"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </>
    )
}

export const Date = ({ value, onChange }) => {
    return (
        <>
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">
                    Expense Date:
                </label>
                <input
                    type="date"
                    name="date"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </>
    )
}