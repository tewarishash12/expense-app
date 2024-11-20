import React, { useEffect, useState } from 'react';
import { TrashIcon, PencilIcon } from '@heroicons/react/outline'; // Importing Trash and Pencil Icons
import Navbar from '../components/Navbar';
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify

const ExpenseRecords = () => {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null); // State to manage which expense is being edited
  const [updatedExpense, setUpdatedExpense] = useState({
    expense: '',
    category: '',
    cost: '',
    date: ''
  }); // State to store updated expense details

  useEffect(() => {
    // Retrieve data from localStorage when the component mounts
    const storedData = JSON.parse(localStorage.getItem("expenses") || "[]");
    setExpenses(storedData);
  }, []);

  // Function to delete an expense by id
  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
    // Update localStorage after deleting an expense
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
    toast.success('Expense deleted successfully!'); // Show toast notification on delete
  };

  // Function to start editing an expense
  const startEditing = (expense) => {
    setEditingExpense(expense.id);
    setUpdatedExpense({
      expense: expense.expense,
      category: expense.category,
      cost: expense.cost,
      date: expense.date
    });
  };

  // Function to handle input change while updating
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedExpense({
      ...updatedExpense,
      [name]: value
    });
  };

  // Function to update an expense
  const updateExpense = (id) => {
    const updatedExpenses = expenses.map((expense) =>
      expense.id === id
        ? { ...expense, ...updatedExpense } // Update the expense with new data
        : expense
    );
    setExpenses(updatedExpenses);
    // Update localStorage after updating an expense
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
    setEditingExpense(null); // Exit editing mode
    toast.success('Expense updated successfully!'); // Show toast notification on update
  };

  return (
    <>
      <Navbar />
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
        <h1 className="text-4xl font-bold mb-10 text-center text-orange-700 z-50">
          Expense Records
        </h1>

        {/* Edit Form (only show when editing) */}
        {editingExpense && (
          <div className="w-11/12 max-w-4xl bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold text-orange-700 mb-4">
              Edit Expense
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                name="expense"
                value={updatedExpense.expense}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Expense Title"
              />
              <input
                type="text"
                name="category"
                value={updatedExpense.category}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Category"
              />
              <input
                type="number"
                name="cost"
                value={updatedExpense.cost}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Cost"
              />
              <input
                type="date"
                name="date"
                value={updatedExpense.date}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              <button
                onClick={() => updateExpense(editingExpense)}
                className="w-full bg-orange-500 text-white p-2 rounded"
              >
                Save Changes
              </button>
              <button
                onClick={() => setEditingExpense(null)}
                className="w-full mt-2 bg-gray-300 text-black p-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Table */}
        {expenses.length > 0 ? (
          <div className="w-11/12 max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full border-collapse z-10">
              <thead>
                <tr className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white">
                  <th className="py-3 px-4 text-left font-medium">Expense Title</th>
                  <th className="py-3 px-4 text-left font-medium">Category</th>
                  <th className="py-3 px-4 text-left font-medium">Cost</th>
                  <th className="py-3 px-4 text-left font-medium">Date</th>
                  <th className="py-3 px-4 text-left font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="max-h-[300px] overflow-y-auto">
                {expenses.map(({ id, expense, category, cost, date }, index) => (
                  <tr
                    key={id}
                    className={`${index % 2 === 0
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
                    <td className="py-3 px-4 text-gray-900 dark:text-gray-100">
                      {/* Edit Icon */}
                      <button
                        onClick={() => startEditing({ id, expense, category, cost, date })}
                        className="text-blue-500 hover:text-blue-700 transition-colors"
                      >
                        <PencilIcon className="w-6 h-6" />
                      </button>
                      {/* Trash Icon */}
                      <button
                        onClick={() => deleteExpense(id)} // Delete the expense on click
                        className="ml-4 text-red-500 hover:text-red-700 transition-colors"
                      >
                        <TrashIcon className="w-6 h-6" />
                      </button>
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

      {/* Toast Notifications Container */}
      <ToastContainer />
    </>
  );
};

export default ExpenseRecords;
