import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
// import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            {/* Top part */}
            <footer className="footer p-8 bg-neutral text-neutral-content lg:px-24">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Frontend development</a>
                    <a className="link link-hover">Advertisement</a>
                    <a className="link link-hover">Web Development</a>
                    <a className="link link-hover">MERN Stack Development</a>
                    <a className="link link-hover">Graphics Design</a>
                    <a className="link link-hover">Video editing and Animation</a>
                    <a className="link link-hover">Digital Marketing</a>
                </nav>
                {/* <nav>
                    <header className="footer-title">Company</header>
                    <a  className="link link-hover">About</a>
                    <a className="link link-hover">Skills</a>
                    <a className="link link-hover">Projects</a>
                    <a className="link link-hover">Skills</a>
                    <a className="link link-hover">Contact</a>
                </nav> */}
                <nav>
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4 justify-items-end">
                        <a href="https://www.linkedin.com/in/salman-junaed-islam-b76367a9/">
                            <FaLinkedinIn className="text-4xl font-extrabold pl-4"/>
                        </a>
                        <a href="https://github.com/SalmanJunaed">
                            <FaGithub className="text-4xl font-extrabold pl-4"/>
                        </a>
                        <a href="https://www.facebook.com/salman1.junaed/">
                            <FaFacebookSquare className="text-4xl font-extrabold pl-4"/>
                        </a>
                    </div>
                </nav>
            </footer>
            {/* bottom part */}
            <footer className="items-center bg-neutral-800 text-neutral-content py-3">
                <aside className=" grid-flow-col text-center">
                    <p className="text-center">Copyright © 2024 - Author Salman Junaed Islam</p>
                </aside>
            </footer>
        </div>
    )
}

export default Footer
