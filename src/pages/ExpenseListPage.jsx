import React from 'react'
import ExpenseList from '../components/ExpenseList';
import { useState } from 'react';

// We are creating a useState here so that we can update the page data without reloading the page and the latest information can be displayed

function useForceUpdation(){
    const [value,setValue] = useState(0);
    return () => setValue(value => value+1);
}

const ExpenseListPage = () => {
    const forceUpdate = useForceUpdation();
    //custom hook for updating the element without reloading the page

    const expenseString = localStorage.getItem("expenses");
    const expenses = JSON.parse(expenseString);

    const handleDeleteExpense = (idx) =>{
        const updation = expenses.filter((expense, idnx) =>{
            return expense.id !== idx;
        })

        const updatedString = JSON.stringify(updation);
        localStorage.setItem("expenses", updatedString);
        forceUpdate();
    }

    return (
        <>
            <h1>ExpenseList</h1>
            <ExpenseList expenses={expenses} handleDeleteExpense={handleDeleteExpense} />
        </>
    )
}

export default ExpenseListPage