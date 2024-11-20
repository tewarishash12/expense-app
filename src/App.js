import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExpenseRecord from './pages/ExpenseRecord';
import Form from './pages/Form';

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/addexpense' element={<Form/>}/>
            <Route path='/history' element={<ExpenseRecord />}/>
          </Routes>
        </Router>
      </>
  );
}

export default App;
