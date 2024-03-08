
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact, FaShopify, FaWindows, FaWordpress } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa";
import { SiAdobepremierepro, SiExpress, SiJsonwebtokens, SiMongodb, SiVisualstudiocode } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import { DiIllustrator } from "react-icons/di";
import { BiLogoBlender } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { FaJs } from "react-icons/fa6";
import { SiPrisma } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
    return (
        <section id="skills" className="py-12 bg-blue-950 text-center bg-[url('https://i.ibb.co/RCm8F89/5166950-2.jpg')]">
            <h1 className="text-4xl underline uppercase text-white text-center font-bold"> Development Skills </h1>
            
            <div className="px-16 py-4">
                <h2 className=" text-xl text-white py-2">Languages</h2>
                <div className="text-2xl inline-flex gap-6">
                    <FaHtml5 className="text-orange-600 text-6xl font-extrabold pl-4 hover:text-7xl ease-in duration-300"/>
                    <FaCss3Alt className="text-sky-400 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    <FaJs className="text-yellow-400 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                </div>
            </div>

            <div className="divider divider-horizontal"></div> 
            
            <div className="px-16 py-1">
                <h2 className=" text-xl text-white py-2">Frameworks and library</h2>
                <div className="text-2xl inline-flex gap-6">
                    <FaReact  className="text-blue-500 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    <SiExpress className="text-white text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    <FaNodeJs className="text-green-500 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300" />
                    <SiMongodb className="text-green-600 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    <SiTailwindcss className="text-blue-400 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    <SiPrisma className="text-blue-400 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    <TbBrandRedux className="text-purple-400 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    <TbBrandNextjs className="text-white text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    {/* <div className="radial-progress text-white" style={{"--value":100}} role="progressbar">100%</div> */}
                </div>
            </div>

            <div className="divider divider-horizontal"></div> 
            
            <div className="px-16 py-4">
                <h2 className=" text-xl text-white py-2">Tools</h2>
                <div className="text-2xl inline-flex gap-4">
                    <SiVisualstudiocode className="text-sky-400 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    <IoLogoFirebase className="text-yellow-500 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    <SiJsonwebtokens className="text-white text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    {/* <SiLatex className="text-sky-400"/> */}
                </div>
            </div>

            <div className="divider divider-horizontal"></div> 
            
            <div className="px-16 py-4">
                <h2 className=" text-xl text-white py-2">CMS</h2>
                <div className="text-2xl inline-flex gap-4">
                <FaWordpress className="text-white text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                <FaShopify className="text-green-500 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                </div>
            </div>

            <div className="divider divider-horizontal"></div> 

            <div className="px-16 py-4">
                <h2 className=" text-xl text-white py-2">Graphics  & Animation</h2>
                <div className="text-3xl inline-flex gap-4">
                    <DiPhotoshop className="text-sky-500 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/> 
                    <DiIllustrator className="text-orange-500 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    <SiAdobepremierepro className="text-sky-400 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    <BiLogoBlender className="text-orange-500 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                </div>
            </div>

            <div className="divider divider-horizontal"></div> 
            
            <div className="px-16 py-4">
                <h2 className=" text-xl text-white py-2">OS:</h2>
                <div className="inline-flex text-white">
                    <FaWindows className=" text-5xl font-bold pl-4 hover:text-7xl ease-in duration-300" />. 95, 98, XP, 7, 10.
                    <FaLinux className=" text-5xl font-bold pl-4 hover:text-7xl ease-in duration-300" />. Ubuntu, Kali
                </div> 
            </div>
            
            
        </section>
    )
}

export default Skills
