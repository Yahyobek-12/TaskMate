import '../Styles/Home.css';
import { useEffect, useState } from 'react';

const TopBar = () => {
  const [currentData, setCurrentData] = useState('');

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      const formattedDate = now.toLocaleDateString('en-US', options);
      setCurrentData(formattedDate);
    };

    updateDate();

    const intervalId = setInterval(updateDate, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="top-bar  animate__animated animate__fadeInDown">
      <h2 className="top-logo">ToDo <span>Forge</span></h2>
        <h3 className="calendar">{currentData}</h3>
    </div>
  )
}

export default TopBar
