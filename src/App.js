import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExpenseFormPage from './pages/ExpenseFormPage';
import ExpenseListPage from './pages/ExpenseListPage';
import { FormValuesProvider } from './context/FormContext';

function App() {
  

  return (
    <>
      <Router>
        <FormValuesProvider>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/addexpense' element={<ExpenseFormPage />} />
            <Route path='/history' element={<ExpenseListPage />} />
          </Routes>
        </FormValuesProvider>
      </Router>
    </>
  );
}

export default App;