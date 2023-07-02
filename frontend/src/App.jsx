import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TaskForm from './pages/TaskForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <main className='container mx-auto px-10'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/task/:id' element={<TaskForm />} />
          <Route path='/task/new' element={<TaskForm />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
