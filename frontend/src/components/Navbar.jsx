import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className='flex justify-between items-center my-7'>
      <Link to='/' className='text-4xl font-bold text-white'>
        Task App
      </Link>

      <Link
        to='/task/new'
        className='bg-blue-500 hover:bg-blue-700 transition text-white font-bold py-2 px-4 rounded'
      >
        Create Task
      </Link>
    </header>
  );
}

export default Navbar;
