import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchTask, createTask, updateTask, deleteTask } from '../api/tasks';

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const params = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!params.id) {
        const res = await createTask({ title, description });
        console.log(res);
      } else {
        const res = await updateTask(params.id, {
          title,
          description,
        });
        console.log(res);
      }
      navigate('/');
    } catch (error) {
      console.log(error);
    }
    e.target.reset();
  };

  useEffect(() => {
    if (params.id) {
      fetchTask(params.id)
        .then((res) => {
          setTitle(res.data.title);
          setDescription(res.data.description);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className='flex items-center justify-center h-[calc(100vh-10rem)]'>
      <form className='bg-zinc-900 p-12 rounded-lg' onSubmit={handleSubmit}>
        <h2 className='text-3xl font-bold mb-7'>
          {params.id ? 'Update Task' : 'Create Task'}
        </h2>
        <input
          type='text'
          placeholder='Write a title'
          autoFocus
          className='block py-2 px-3 mb-4 w-full text-black'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          placeholder='Write a description'
          rows={3}
          className='block py-2 px-3 mb-4 w-full text-black'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className='bg-blue-500 hover:bg-blue-700 transition text-white font-bold py-2 px-4 rounded block w-full'>
          {params.id ? 'Update Task' : 'Create Task'}
        </button>

        {params.id && (
          <button
            className='bg-red-500 hover:bg-red-700 transition text-white font-bold py-2 px-4 rounded block w-full mt-4'
            onClick={async () => {
              try {
                const res = await deleteTask(params.id);
                navigate('/');
              } catch (error) {
                console.log(error);
              }
            }}
          >
            Delete
          </button>
        )}
      </form>
    </div>
  );
}

export default TaskForm;
