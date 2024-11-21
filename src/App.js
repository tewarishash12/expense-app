import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExpenseFormPage from './pages/ExpenseFormPage';

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/addexpense' element={<ExpenseFormPage/>}/>
            {/* <Route path='/history' element={<ExpenseRecords />}/> */}
          </Routes>
        </Router>
      </>
  );
}

export default App;
