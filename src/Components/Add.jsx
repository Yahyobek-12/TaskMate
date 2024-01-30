import '../Styles/Add.css';
import Navbar from "./Navbar";
import { Tooltip } from '@mui/material';
import { TaskContext } from '../Provider';
import addLogo from '../Images/add-logs.webp';
import { useContext, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import bookLogo from '../Images/todo-logos.png';
import { ToastContainer, toast } from 'react-toastify';

const Add = () => {
  const [tasks, setTasks] = useState({ title: '', description: '' });
  const added = () => toast.success('⚡️ Created Successfully');
  const notWrite = () => toast.error('✍️ Please Write...');
  const { addTask } = useContext(TaskContext);

  const changehandler = (e) => {
    setTasks({ ...tasks, [e.target.name]: e.target.value });
  };

  const addTaskHandler = (e) => {
    e.preventDefault();

    if (tasks.title.trim() === '' || tasks.description.trim() === '') {
      notWrite();
      return;
    }

    const data = { title: tasks.title, description: tasks.description };
    addTask(data);
    added();

    setTasks({ title: '', description: '' });
  };

  return (
    <div className='add'>
      <img className='logo-img animate__animated animate__bounceIn' src={bookLogo} alt="logo" />
      <form className="form  animate__animated animate__fadeInDown" onSubmit={addTaskHandler}>
        <input type="text" className="title" placeholder='Write Title...' name='title' value={tasks.title} onChange={changehandler} />
        <input type="text" className="description" placeholder='Write Description...' name='description' value={tasks.description} onChange={changehandler} />
        <button type='submit'><img src={addLogo} alt="add-logo" className='add-btn' /></button>
      </form>
      <Navbar />
      <ToastContainer />
    </div>
  );
};

export default Add;
