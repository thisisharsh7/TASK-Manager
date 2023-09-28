import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import BeatLoader from "react-spinners/BeatLoader"
import { REGISTER } from './states/reducers';


const Register = () => {
  const [isAppended, setIsAppended] = useState(false)
  let [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const errorMsg = useRef(null);
  const errorRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const appendErrorMsg = () => {
    if (!isAppended) {
      const errorPara = document.createElement('div');
      errorPara.innerText = 'Input field cannot be empty!';
      errorPara.classList.add('text-base', 'text-normal', 'text-red-500', 'mb-4', 'text-left')
      errorMsg.current.parentElement.append(errorPara);
      errorRef.current = errorPara;
      setIsAppended(true);
    }
    setLoading(false);
  };

  const removeErrorMsg = () => {
    if (errorRef.current && errorRef.current.parentElement) {
      errorRef.current.parentElement.removeChild(errorRef.current);
      setIsAppended(false);
    }
    localStorage.setItem('register', JSON.stringify(true));
    localStorage.setItem('formData', JSON.stringify(formData));
    dispatch(REGISTER(true))
    setLoading(false);

  }

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    if (formData.email === "" || formData.name === "" || formData.password === "") {
      setTimeout(appendErrorMsg, 500)
    } else {
      setTimeout(removeErrorMsg, 500);
    }
  };


  return (
    <div className="w-full max-w-md p-6 bg-[#0909096a]  text-white rounded-lg shadow-lg transition-all duration-500">
      <h2 className="md:text-4xl text-3xl text-center font-semibold mb-4 " ref={errorMsg}>REGISTER</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-semibold" >
            Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 outline-none focus:border-green-700 text-black border-4 "
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold" >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 outline-none focus:border-green-700 text-black border-4 "
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-semibold" >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-2 outline-none focus:border-green-700 text-black border-4"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className=" w-full px-4 py-2 before:left-0 z-30 font-medium before:-z-10 before:top-0  transition-all cursor-pointer duration-500 tracking-wide p bg-green-800 relative before:bg-green-700 before:absolute   before:transition-all before:duration-500 before:w-0 before:h-0 hover:before:w-full hover:before:h-full "
        >
          {
            loading ? <BeatLoader loading={loading} color='white' size={10} speedMultiplier={1.2} /> : "Register"
          }
        </button>
      </form>
    </div>
  );
};

export default Register;
