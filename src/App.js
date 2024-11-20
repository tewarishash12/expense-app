import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExpenseRecords from './pages/ExpenseRecords';
import Form from './pages/Form';
import Navbar from './components/Navbar';

function App() {
  return (
      <>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/addexpense' element={<Form/>}/>
            <Route path='/history' element={<ExpenseRecords />}/>
          </Routes>
        </Router>
      </>
  );
}

export default App;
