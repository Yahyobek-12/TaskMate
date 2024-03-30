import '../Styles/Home.css';
import { useState } from 'react';
import bookImage from '../Images/book.gif';
import { FaTrashAlt } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { MdContentCopy } from "react-icons/md";
import 'react-toastify/dist/ReactToastify.css';
import thunderImage from '../Images/thunder.gif';
import { IoReaderOutline  } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';


const AllTask = ({ todos, onDelete }) => {
  const [read, setRead] = useState(false);

  const toggleRead = () => {
    setRead(!read);
  };

  const copied = () => {
    toast.dark('2 Items Copied To Clipboard');
    const copy = require('clipboard-copy');
    copy(`⚡️ ${todos.title} && 📔 ${todos.description}`)
  };

  const formattedDate = todos?.date
    ? `${todos.date.day}/${todos.date.month}/${todos.date.year}`
    : 'N/A';

    return (
    <div className="all-task">
      <div className="task-cards">
        <div className="task-card animate__animated animate__fadeInUp">
          <h3><img className='thunder-title' src={thunderImage} alt="thunder-title" /> {todos?.title?.slice(0, 10)}</h3>
          <p className="description"><img className='book-description' src={bookImage} alt="thunder-title" /> {todos.description.slice(0, 100)}</p>
          <span>📆 {formattedDate}</span>
          <IoReaderOutline className='read' onClick={toggleRead} />
        </div>
        {read && (
          <div className="read-card">
            <h2><img className='thunder-title' src={thunderImage} alt="thunder-title" /> {todos?.title}</h2>
            <p>
              <p>{todos?.description}</p>
            </p>
            <div className="read-bottom">
              <div className="read-bottom-nav">
                <div className="created-at">
                  <h3>📆 {formattedDate}</h3>
                </div>
                <MdContentCopy onClick={copied} className='read-icon' />
                <FaTrashAlt className='read-icon' onClick={onDelete} />
                <SlArrowDown className='read-icon' onClick={toggleRead} />
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default AllTask;
