import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExpenseFormPage from './pages/ExpenseFormPage';
import ExpenseListPage from './pages/ExpenseListPage';
import { useState } from 'react';

function App() {
  const [idx, setIdx] = useState(0)
  const [expense, setExpense] = useState("");
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState("");
  const [date, setDate] = useState("");

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/addexpense' element={<ExpenseFormPage
            idx={idx} setIdx={setIdx}
            expense={expense} setExpense={setExpense}
            category={category} setCategory={setCategory}
            cost={cost} setCost={setCost}
            date={date} setDate={setDate} />} />
          <Route path='/history' element={<ExpenseListPage 
            setIdx={setIdx}
            setExpense={setExpense}
            setCategory={setCategory}
            setCost={setCost}
            setDate={setDate} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;