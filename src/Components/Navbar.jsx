import '../Styles/Navbar.css';
import { useContext } from 'react';
import { Tooltip } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { MdLibraryAdd } from "react-icons/md";
import { IoLogOutSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../Provider"; 

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
        <Tooltip title='Home Page'><NavLink to='/Home'><AiFillHome className='link-icon' /></NavLink></Tooltip>
        <Tooltip title='Add Task'><NavLink to='/Add'><MdLibraryAdd className='link-icon' /></NavLink></Tooltip>
        <Tooltip title='Logout'><button className="btn-logout" onClick={logOut}><IoLogOutSharp className='btn-icon' /></button></Tooltip>
      </ul>
    </div>
  )
}

export default Navbar;
