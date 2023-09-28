

import { TaskCard } from './TaskCard';
import { useDispatch, useSelector } from 'react-redux';
import { DEL_TASK } from '../states/reducers';
import { useEffect, useState } from 'react';





const TaskManager = () => {

    const { tasks } = useSelector((state) => state.user);
    const [allTask, setAllTask] = useState(tasks);
    const dispatch = useDispatch();

    const filterT = (id) => {
        const filteredTask = allTask.filter(task => task.id !== id);
        return filteredTask;
    }
    const handleDelete = (id) => {
        const leftTask = filterT(id);
        setAllTask(leftTask);
        dispatch(DEL_TASK(leftTask));
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(allTask));
    }, [allTask]);

    return (
        <div className="flex flex-col items-center mt-4 bg-black">
            <div className="mt-4 w-full md:w-3/4 lg:w-1/2 px-6 py-4 min-h-screen">
                {
                    allTask?.length
                        ?
                        allTask.map((task) => (
                            <TaskCard key={task.id} id={task.id} assign={task.assign} title={task.title} status={task.status} file={task.file} handleDelete={handleDelete} />
                        ))
                        :
                        <div className='text-white text-2xl text-center'>No Task Created</div>
                }

            </div>
        </div>
    );
};



export default TaskManager;
