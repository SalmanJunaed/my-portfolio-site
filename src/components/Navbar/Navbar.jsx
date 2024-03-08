
import { BiHomeAlt } from "react-icons/bi";
import { Link } from "react-scroll";
import { GiSkills } from "react-icons/gi";
import { BsClipboardData } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { BsBriefcase } from "react-icons/bs";
import { PiGraduationCapBold } from "react-icons/pi";
import { SiAboutdotme } from "react-icons/si";

const Navbar = () => {
    return (
        
        <nav className="fixed bottom-2 mt-16 lg:bottom-8 w-full overflow-hidden z-50">
            {/* <h1 className="text-2xl text-center font-bold">
                Nav bar
            </h1> */}
            <div className=" container mx-auto">
                {/* nav inner  */}
                <div className="w-full bg-gray-800 h-[60px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-xl text-white">
                    <Link smooth='true'  to='home' className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-green-500"><BiHomeAlt/></Link> {/*Home */}
                    <Link smooth='true'  to='about' className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-green-500"><SiAboutdotme /></Link> {/*About */}
                    <Link smooth='true'  to='skills' className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-green-500"><GiSkills /></Link> {/* Skills  */}
                    <Link smooth='true'  to='projects' className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-green-500"><GrProjects /></Link> {/* projects  */}
                    <Link smooth='true'  to='experience' className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-green-500"><BsClipboardData/></Link> {/* Work Experience  */}
                    <Link smooth='true'  to='education' className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-green-500"><PiGraduationCapBold /></Link> {/* Contact information  */}
                    <Link smooth='true'  to='contact' className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-green-500"><BsBriefcase/></Link> {/* Education  */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;