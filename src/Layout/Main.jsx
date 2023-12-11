import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div className="min-h-full bg-gradient-to-r from-sky-600 to-indigo-700">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;