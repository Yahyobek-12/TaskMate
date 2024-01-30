import { Link } from 'react-router-dom';
import { AiTwotoneHome } from "react-icons/ai";

const Way = () => {
  return (
    <div className='way animate__animated animate__fadeInDown'>
        <h2>Go To Home Page</h2>
        <Link to="Home" className='way-link'><AiTwotoneHome /> Home</Link>
    </div>
  )
}

export default Way
