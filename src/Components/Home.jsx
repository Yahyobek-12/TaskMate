import TopBar from "./Top-Bar";
import AllTask from "./All-Task";
import { useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { TaskContext } from "../Provider";
import noData from '../Images/hand.gif';

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
                    <div className="wrap">
                        {tasks.map((todo, index) => (
                            <AllTask key={uuidv4()} todos={todo} onDelete={() => handleDelete(index)} />
                        ))}
                    </div>
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
