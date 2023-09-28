import { BeatLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN } from './states/reducers';
import { useState } from 'react';
import TaskManager from './TaskManager/TaskManager';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';



const btnDesign = "py-2 px-4 before:left-0 z-30 font-medium before:-z-10 before:top-0 text-white shadow-xl rounded  transition-all cursor-pointer duration-500 tracking-wide p bg-green-800 relative before:bg-green-700 before:absolute   before:transition-all before:duration-500 before:w-0 before:h-0 hover:before:w-full hover:before:h-full ";

const Home = () => {

  const [loading, setLoading] = useState({
    loading1: false,
    loading2: false,
    loading3: false
  });
  const [what2Show, set2Show] = useState(true)
  const [toggleText, setToggle] = useState('Task History');
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { userForm } = useSelector((state) => state.user);


  const createTaskPage = () => {
    setLoading({ ...loading, loading2: false });
    navigate(`/task/${uuidv4()}`);
  }
  const handleCreateTask = () => {
    setLoading({ ...loading, loading2: true });
    setTimeout(createTaskPage, 500);
  };

  const loggedOut = () => {
    dispatch(LOGIN(false));
    setLoading({ ...loading, loading1: false });
  }

  const handleLogout = () => {
    setLoading({ ...loading, loading1: true });
    localStorage.setItem('login', JSON.stringify(false));
    setTimeout(loggedOut, 500);
  }
  const handleClk = () => {
    setLoading({ ...loading, loading3: false });
    set2Show(!what2Show)
    setToggle((toggleText === 'Task History') ? 'All Task' : 'Task History')
  }

  const handleClick = () => {
    setLoading({ ...loading, loading3: true });
    setTimeout(handleClk, 500);
  }

  return (
    <div className="w-full rounded shadom-md bg-white max-w-5xl p-4 ">
      <h1 className='text-3xl font-bold mb-7 text-center'>Welcome {userForm.name}</h1>
      <div className="flex justify-center gap-6 flex-wrap ">
        <button className={btnDesign} onClick={handleCreateTask}>
          {
            loading.loading2 ? <BeatLoader loading={loading.loading2} color='white' size={10} speedMultiplier={1.2} /> : "Create Task"
          }
        </button>
        <button className={btnDesign} onClick={handleClick}>
          {
            loading.loading3 ? <BeatLoader loading={loading.loading3} color='white' size={10} speedMultiplier={1.2} /> : toggleText
          }
        </button>
        <button
          onClick={handleLogout}
          className={btnDesign}
        >
          {
            loading.loading1 ? <BeatLoader loading={loading.loading1} color='white' size={10} speedMultiplier={1.2} /> : "Logout"
          }
        </button>
      </div>
      <TaskManager what2Show={what2Show} />
    </div>
  );
};

export default Home;
