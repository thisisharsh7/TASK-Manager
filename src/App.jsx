import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Register from './Register';
import Login from './Login';
import { useSelector } from 'react-redux';
import Task from './TaskManager/Task';



const App = () => {
  const { register, login } = useSelector((state) => state.user);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('http://cs.gettysburg.edu/~duncjo01/assets/images/patterns/30.png')]">
      <Routes>

        <Route path="/register" element={
          (register) ? <Navigate to="/login" /> : <Register />
        } exact />

        <Route path="/login" element={
          (login)
            ?
            <Navigate to="/" />
            : (!register) ? <Navigate to="/register" /> : <Login />} exact
        />

        <Route path="/" element={
          (register && login)
            ?
            <Home />
            :
            (register)
              ?
              <Navigate to="/login" /> : <Navigate to="/register" />} exact />

        <Route path="/task/:taskId" element={
          (register && login)
            ?
            <Task />
            :
            (register)
              ?
              <Navigate to="/login" /> : <Navigate to="/register" />} exact />

      </Routes>
    </div>
  )
}

export default App