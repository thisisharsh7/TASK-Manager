import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Register from './Register';
import Login from './Login';
import { useSelector } from 'react-redux';
import Task from './TaskManager/Task';
import NotFound from './NotFound';



const App = () => {
  const { register, login } = useSelector((state) => state.user);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/bgImage.png')]">
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

        <Route path='*' element={<NotFound />} />

      </Routes>
    </div>
  )
}

export default App