import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormProvider = createContext();

export function useCallForm() {
    return useContext(FormProvider);
}

export const FormValuesProvider = ({ children }) => {
    const navigate = useNavigate();
    const [idx, setIdx] = useState(0);
    const [expense, setExpense] = useState('');
    const [category, setCategory] = useState('');
    const [cost, setCost] = useState('');
    const [date, setDate] = useState('');
    const [expenses, setExpenses] = useState(() => {
        const expenseString = localStorage.getItem('expenses');
        return expenseString ? JSON.parse(expenseString) : [];
    });

    const handleExpenseSave = (newExpense) => {
        const updatedExpenses = [...expenses];

        if (idx !== undefined && idx < updatedExpenses.length) {
            updatedExpenses[idx] = { id: idx, ...newExpense };
        } else {
            updatedExpenses.push({ id: updatedExpenses.length, ...newExpense });
        }

        // Update state and sync with localStorage
        setExpenses(updatedExpenses);
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newExpense = { id: idx, expense, category, cost, date };

        handleExpenseSave(newExpense);
        setIdx(idx + 1);

        setExpense('');
        setCategory('');
        setCost('');
        setDate('');

        navigate('/history');
    };

    const handleDeleteExpense = (idx) => {
        const updatedExpenses = expenses.filter((_, i) => i !== idx);
        setExpenses(updatedExpenses);
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    };

    const handleUpdateExpense = (idx) => {
        const expenseToUpdate = expenses[idx];
        setIdx(idx);
        setExpense(expenseToUpdate.expense);
        setCategory(expenseToUpdate.category);
        setCost(expenseToUpdate.cost);
        setDate(expenseToUpdate.date);
        navigate('/addexpense');
    };

    return (
        <FormProvider.Provider
            value={{ idx, setIdx, expense, setExpense, category, setCategory, cost, setCost, date, setDate, expenses, handleExpenseSave, handleSubmit, handleDeleteExpense, handleUpdateExpense, }}
        >
            {children}
        </FormProvider.Provider>
    );
};

export default FormProvider;
