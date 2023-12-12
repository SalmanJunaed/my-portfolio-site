import { Link } from "react-scroll";


const Header = () => {
    return (
        <header id="home" className="bg-gray-800 text-white py-4 hidden lg:block">
            <div className="container xm-auto flex justify-end pr-4">
                <div></div>
                <div className="flex justify-center gap-2 lg:flex-row">

                    <button  className=" btn border-none relative flex px-4 rounded-2xl items-center justify-center overflow-hidden bg-gray-600 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-green-600 before:duration-500 before:ease-out hover:shadow-green-600 hover:before:h-56 hover:before:w-56">
                        <Link smooth='true'  to='home' ><span className="relative z-10">Home</span></Link>
                    </button>

                    <button className=" btn border-none relative flex px-4 rounded-2xl items-center justify-center overflow-hidden bg-gray-600 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-green-600 before:duration-500 before:ease-out hover:shadow-green-600 hover:before:h-56 hover:before:w-56">
                        <Link smooth='true'  to='about' ><span className="relative z-10">About</span></Link>
                    </button>

                    <button className=" btn border-none relative flex px-4 rounded-2xl items-center justify-center overflow-hidden bg-gray-600 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-green-600 before:duration-500 before:ease-out hover:shadow-green-600 hover:before:h-56 hover:before:w-56">
                        <Link smooth='true'  to='skills' ><span className="relative z-10">Skill</span></Link>
                    </button>

                    <button className=" btn border-none relative flex px-4 rounded-2xl items-center justify-center overflow-hidden bg-gray-600 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-green-600 before:duration-500 before:ease-out hover:shadow-green-600 hover:before:h-56 hover:before:w-56">
                        <Link smooth='true'  to='experience' ><span className="relative z-10">Work Experience</span></Link>
                    </button>

                    <button className=" btn border-none relative flex px-4 rounded-2xl items-center justify-center overflow-hidden bg-gray-600 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-green-600 before:duration-500 before:ease-out hover:shadow-green-600 hover:before:h-56 hover:before:w-56">
                        <Link smooth='true'  to='projects' ><span className="relative z-10">Projects</span></Link>
                    </button>

                    <button className=" btn border-none relative flex px-4 rounded-2xl items-center justify-center overflow-hidden bg-gray-600 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-green-600 before:duration-500 before:ease-out hover:shadow-green-600 hover:before:h-56 hover:before:w-56">
                        <Link smooth='true'  to='education' ><span className="relative z-10">Education</span></Link>
                    </button>

                    <button className=" btn border-none relative flex px-4 rounded-2xl items-center justify-center overflow-hidden bg-gray-600 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-green-600 before:duration-500 before:ease-out hover:shadow-green-600 hover:before:h-56 hover:before:w-56">
                        <Link smooth='true'  to='contact' ><span className="relative z-10">Contact</span></Link>
                    </button>

                    
                </div>
            </div>
        </header>
    );
};

export default Header;