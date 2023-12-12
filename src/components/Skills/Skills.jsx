
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact, FaShopify, FaWindows, FaWordpress } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaLinux } from "react-icons/fa";
import { SiAdobepremierepro, SiExpress, SiJsonwebtokens, SiMongodb, SiVisualstudiocode } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import { DiIllustrator } from "react-icons/di";
import { BiLogoBlender } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";

const Skills = () => {
    return (
        <section id="skills" className="my-8 bg-blue-950">
            <h1 className="text-4xl underline uppercase text-white text-center font-bold"> Development Skills </h1>
            <div className="px-16 py-4">
                <h2 className=" text-xl text-white py-2">OS:</h2>
                <div className="inline-flex text-white"><FaWindows />98, xp, 7, 10. <div className="divider divider-horizontal"></div> <FaLinux />Ubuntu, Kali</div> 
            </div>
            <div className="px-16 py-4">
                <h2 className=" text-xl text-white py-2">Languages</h2>
                <div className="text-2xl inline-flex gap-6">
                    <FaHtml5 className="text-orange-500"/><div className="radial-progress text-white" style={{"--value":86}} role="progressbar">86%</div>
                    <FaCss3Alt className="text-sky-300"/> <div className="radial-progress text-white" style={{"--value":75}} role="progressbar">75%</div>
                    <TbBrandJavascript className="text-yellow-500"/><div className="radial-progress text-white" style={{"--value":65}} role="progressbar">65%</div>
                </div>
            </div>
            <div className="px-16 py-4">
                <h2 className=" text-xl text-white py-2">Frameworks and library</h2>
                <div className="text-2xl inline-flex gap-6">
                    <FaReact className="text-blue-400"/><div className="radial-progress text-white" style={{"--value":72}} role="progressbar">72%</div>
                    <SiExpress className="text-orange-600 text-5xl font-bold pl-4"/><div className="radial-progress text-white" style={{"--value":40}} role="progressbar">40%</div>
                    <FaNodeJs className="text-green-500 text-5xl font-bold pl-4" /><div className="radial-progress text-white" style={{"--value":45}} role="progressbar">45%</div>
                    <SiMongodb className="text-green-600 text-5xl font-bold pl-4"/><div className="radial-progress text-white" style={{"--value":60}} role="progressbar">60%</div>
                    <SiTailwindcss className="text-blue-400 text-5xl font-bold pl-4"/> <div className="radial-progress text-white" style={{"--value":75}} role="progressbar">75%</div>
                    {/* <div className="radial-progress text-white" style={{"--value":100}} role="progressbar">100%</div> */}
                </div>
            </div>
            <div className="px-16 py-4">
                <h2 className=" text-xl text-white py-2">Tools</h2>
                <div className="text-2xl inline-flex gap-4">
                    <SiVisualstudiocode className="text-sky-400"/>
                    <IoLogoFirebase className="text-yellow-500"/>
                    <SiJsonwebtokens className="text-white"/>
                    {/* <SiLatex className="text-sky-400"/> */}
                </div>
            </div>
            <div className="px-16 py-4">
                <h2 className=" text-xl text-white py-2">CMS</h2>
                <div className="text-2xl inline-flex gap-4">
                <FaWordpress className="text-white"/>
                <FaShopify className="text-green-500"/>
                </div>
            </div>
            <div className="px-16 py-4">
                <h2 className=" text-xl text-white py-2">Graphics  & Animation</h2>
                <div className="text-3xl inline-flex gap-4">
                    <DiPhotoshop className="text-sky-500"/> 
                    <DiIllustrator className="text-orange-500"/>
                    <SiAdobepremierepro className="text-sky-400"/>
                    <BiLogoBlender className="text-orange-500"/>
                </div>
            </div>
        </section>
    )
}

export default Skills
