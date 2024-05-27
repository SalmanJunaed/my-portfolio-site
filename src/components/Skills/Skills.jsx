
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
import { CgFramer } from "react-icons/cg";
import { FiFigma } from "react-icons/fi";
import { SiAdobexd } from "react-icons/si";

import { motion } from "framer-motion";

const Skills = () => {
    return (
        <section id="skills" className="py-12 bg-blue-950 text-center bg-[url('https://i.ibb.co/RCm8F89/5166950-2.jpg')]">
            <motion.h1 className="text-4xl underline uppercase text-white text-center font-bold"> Development Skills </motion.h1>
            
            <div className="px-16 py-4">
                <h2 className=" text-xl text-white py-2">Languages</h2>
                <div className="text-2xl inline-flex gap-6">
                    <FaHtml5 title="HTML-5" className="text-orange-600 text-6xl font-extrabold pl-4 hover:text-7xl ease-in duration-300"/>
                    <FaCss3Alt title="CSS-3" className="text-sky-400 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    <FaJs title="Java Script" className="text-yellow-400 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                </div>
            </div>

            <div className="divider divider-horizontal"></div> 
            
            <div className="px-16 py-1">
                <h2 className=" text-xl text-white py-2">Frameworks and library</h2>
                <div className="text-2xl inline-flex gap-6">
                    <FaReact title="React.js" className="text-blue-500 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    <SiExpress title="Express.JS" className="text-white text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    <FaNodeJs title="Node.js" className="text-green-500 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300" />
                    <SiMongodb title="MongoDB" className="text-green-600 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    <SiTailwindcss title="Tailwind CSS" className="text-blue-400 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    <SiPrisma title="Prisma" className="text-blue-400 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    <TbBrandRedux title="Redux" className="text-purple-400 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    <TbBrandNextjs title="Next.JS" className="text-white text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    {/* <div className="radial-progress text-white" style={{"--value":100}} role="progressbar">100%</div> */}
                </div>
            </div>

            <div className="divider divider-horizontal"></div> 
            
            <div className="px-16 py-4">
                <h2 className=" text-xl text-white py-2">Tools</h2>
                <div className="text-2xl inline-flex gap-4">
                    <SiVisualstudiocode title="Visual Studio Code" className="text-sky-400 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    <IoLogoFirebase title="Firebase" className="text-yellow-500 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    <SiJsonwebtokens title="JWT" className="text-white text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    <CgFramer title="Framer Motion" className="text-black text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    <FiFigma title="Framer Motion" className="text-white text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    <SiAdobexd title="Adobe XD" className="text-purple-600 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    {/* <SiLatex className="text-sky-400"/> */}
                </div>
            </div>

            <div className="divider divider-horizontal"></div> 
            
            <div className="px-16 py-4">
                <h2 className=" text-xl text-white py-2">CMS</h2>
                <div className="text-2xl inline-flex gap-4">
                <FaWordpress title="Wordpress" className="text-white text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                <FaShopify title="Shopify" className="text-green-500 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                </div>
            </div>

            <div className="divider divider-horizontal"></div> 

            <div className="px-16 py-4">
                <h2 className=" text-xl text-white py-2">Graphics  & Animation</h2>
                <div className="text-3xl inline-flex gap-4">
                    <DiPhotoshop title="Adobe Photoshop" className="text-sky-500 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/> 
                    <DiIllustrator title="Adobe Illustrator" className="text-orange-500 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    <SiAdobepremierepro title="Adobe PremierePro" className="text-sky-400 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
                    <BiLogoBlender title="Blander" className="text-orange-500 text-6xl font-bold pl-4 hover:text-7xl ease-in duration-300"/>
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
