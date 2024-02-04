import '../Styles/Navbar.css';
import { useContext } from 'react';
import { Tooltip } from '@mui/material';
import { TaskContext } from "../Provider"; 
import { NavLink } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { MdLibraryAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { AiOutlineClear } from "react-icons/ai";


const Navbar = () => {
  const navigate = useNavigate();
  const { clearTasks } = useContext(TaskContext); 

  const logOut = () => {
    localStorage.clear();
    clearTasks(); 
    navigate('/');
  }

  return (
    <div className='nav animate__animated animate__fadeInUp'>
      <ul className="navbar">
        <Tooltip title='Home Page'><NavLink to='/'><AiFillHome className='link-icon' /></NavLink></Tooltip>
        <Tooltip title='Add Task'><NavLink to='/Add'><MdLibraryAdd className='link-icon' /></NavLink></Tooltip>
        <Tooltip title='Clear All'><button className="btn-logout" onClick={logOut}><AiOutlineClear className='btn-icon' /></button></Tooltip>
      </ul>
    </div>
  )
}

export default Navbar;
