import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { ADD_TASK } from '../states/reducers';


const Task = () => {
    const { taskId } = useParams();
    const [taskDet, setTaskDet] = useState({
        title: '',
        status: '',
        assign: '',
        id: taskId,
        file: ''
    })
    const [loading, setLoading] = useState(false);
    const statusRef = useRef();
    const navigate = useNavigate();


    const dispatch = useDispatch();
    const handleInput = (e) => {
        const { name, value } = e.target;
        setTaskDet({
            ...taskDet,
            [name]: value,
        });
    };

    const handleStatus = (e) => {
        e.preventDefault();
        const children = statusRef.current.children;
        Array.from(children).map((child) => {
            if (child.name === e.target.name) {
                child.classList.add('border-black', 'text-black')
                setTaskDet({ ...taskDet, status: e.target.name });
            } else {
                child.classList.remove('border-black', 'text-black')
            }
        })
    };

    const taskSaved = () => {
        setLoading(false);
        if (taskDet.title === "" || taskDet.assign === "" || taskDet.status === "" || taskDet.status === "") {
            alert('Input field cannot be empty!')
        } else {
            dispatch(ADD_TASK(taskDet));
            navigate('/');
        }
    }
    const handleSave = (e) => {
        e.preventDefault();

        setLoading(true);
        setTimeout(taskSaved, 500);
    };

    return (
        <div className="container mx-auto mt-10 p-4 max-w-xl bg-white">
            <h2 className="text-2xl font-bold mb-4">Task Detail</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name='title'
                        value={taskDet.title}
                        onChange={handleInput}
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                        File
                    </label>
                    <input
                        type="file"
                        id="file"
                        name='file'
                        value={taskDet.file}
                        onChange={handleInput}
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Assign to
                    </label>
                    <input
                        type="text"
                        id="assign"
                        name='assign'
                        value={taskDet.assign}
                        onChange={handleInput}
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                </div>

                <div className="mb-4 flex gap-4   sm:justify-start justify-between text-white" ref={statusRef}>
                    <button onClick={handleStatus} name='TO DO' className='border-2 bg-red-400 hover:bg-red-500   px-4 py-2 rounded text-sm font-medium'>
                        TO DO
                    </button>
                    <button onClick={handleStatus} name='DOING' className='border-2 bg-yellow-400 hover:bg-yellow-500  px-4 py-2 rounded text-sm font-medium'>
                        DOING
                    </button>
                    <button onClick={handleStatus} name='DONE' className='border-2 bg-green-400 hover:bg-green-500  px-4 py-2 rounded text-sm font-medium'>
                        DONE
                    </button>
                </div>

                <button
                    onClick={handleSave}
                    type="submit"
                    placeholder='Save'
                    className=" w-full px-4 py-2 before:left-0 z-30 font-medium before:-z-10 before:top-0  transition-all cursor-pointer duration-500 tracking-wide p bg-green-800 relative before:bg-green-700 before:absolute   before:transition-all before:duration-500 before:w-0 before:h-0 hover:before:w-full hover:before:h-full "
                >
                    {
                        loading ? <BeatLoader loading={loading} color='white' size={10} speedMultiplier={1.2} /> : "Save"
                    }
                </button>
            </form>
        </div>
    );
};

export default Task;
