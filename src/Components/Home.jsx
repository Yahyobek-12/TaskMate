import Navbar from "./Navbar";
import TopBar from "./Top-Bar";
import AllTask from "./All-Task";
import { useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { TaskContext } from "../Provider";
import noData from '../Images/no-data.webp';

const Home = () => {
    const { tasks, deleteTask } = useContext(TaskContext);

    const handleDelete = (index) => {
        deleteTask(index);
    };

    return (
        <div>
            <TopBar />
            <div className="all-tasks">
                {tasks.length > 0 ? (
                    <>
                        <h3 className='count animate__animated animate__fadeInLeft'>All Task: <span>{tasks.length}</span></h3>
                        {tasks.map((todo, index) => (
                            <AllTask key={uuidv4()} todos={todo} onDelete={() => handleDelete(index)} />
                        ))}
                    </>
                ) : (
                    <div className="no-data animate__animated animate__zoomInDown">
                        <img src={noData} alt="no-data" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
