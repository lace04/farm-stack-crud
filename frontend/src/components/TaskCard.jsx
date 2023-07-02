import { useNavigate } from 'react-router-dom';
import { updateTask } from '../api/tasks';

function TaskCard({ task }) {
  const navigate = useNavigate();

  return (
    <div
      className='bg-zinc-900 rounded-md p-4 hover:cursor-pointer hover:bg-zinc-800 mt-2'
      onClick={() => navigate(`/task/${task._id}`)}
    >
      <div className='flex justify-between'>
        <h2 className='text-2xl font-bold'>{task.title}</h2>
        <button
          onClick={async (e) => {
            e.stopPropagation();
            const res = await updateTask(task._id, {
              completed: !task.completed,
            });
            if (res.status === 200) {
              window.location.reload();
            }
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className={`w-6 h-6 ${
              task.completed ? 'text-green-500' : ''
            }`}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4.5 12.75l6 6 9-13.5'
            />
          </svg>
        </button>
      </div>
      <p className='font-semibold text-slate-500'>{task.description}</p>
    </div>
  );
}

export default TaskCard;
