import '../Styles/Auth.css';
import { FcGoogle } from "react-icons/fc"
import { useEffect, useState } from 'react';
import { auth, provider } from '../Firebase';
import { signInWithPopup } from 'firebase/auth';
import Way from '../Components/Way';

const Auth = () => {
    const [google, setGoogle] = useState('');

    const authGoogle = () => {
        signInWithPopup(auth, provider)
            .then((data) => {
                setGoogle(data.user.email)
                localStorage.setItem('email', data.user.email)
            })
    }

    useEffect(() => {
        setGoogle(localStorage.getItem('email'))
    }, [])

  return (
    <div className='auth'>
    <div className="logo animate__animated animate__fadeInDown">
        <h1>Task<span>Mate</span></h1>
    </div>
      <div className="auth-card animate__animated animate__fadeInUp">
        {google ? <Way /> : (
            <>
                <h2>Login as TaskMate</h2>
                <div className='google-btn' onClick={authGoogle}><FcGoogle className='google-icon' /> <h3>Login With Google</h3></div>
            </>
        )}
      </div>
    </div>
  )
}

export default Auth
