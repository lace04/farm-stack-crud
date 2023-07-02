import { useState } from 'react';
import axios from 'axios';

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post('http://localhost:8000/api/tasks', {
      title,
      description,
    });
    console.log(res.data);

    e.target.reset();
  };

  return (
    <div className='flex items-center justify-center h-[calc(100vh-10rem)]'>
      <form className='bg-zinc-900 p-12 rounded-lg' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Write a title'
          autoFocus
          className='block py-2 px-3 mb-4 w-full text-black'
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder='Write a description'
          rows={3}
          className='block py-2 px-3 mb-4 w-full text-black'
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className='bg-blue-500 hover:bg-blue-700 transition text-white font-bold py-2 px-4 rounded block w-full'>
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
