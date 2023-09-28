import { Link } from "react-router-dom";

const btnDesign = "py-2 px-4 before:left-0 z-30 font-medium before:-z-10 before:top-0 text-white shadow-xl rounded  transition-all cursor-pointer duration-500 tracking-wide p bg-green-800 relative before:bg-green-700 before:absolute   before:transition-all before:duration-500 before:w-0 before:h-0 hover:before:w-full hover:before:h-full ";
const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="bg-green-200 p-10 rounded-md shadow-lg mb-4">
                <h1 className="sm:text-3xl text-2xl mb-4 text-green-800">Page Not Found</h1>
                <p className="text-lg text-green-700">
                    The page you are looking for does not exist.
                </p>
            </div>
            <Link to="/">
                <button className={btnDesign}>
                    Go Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;
