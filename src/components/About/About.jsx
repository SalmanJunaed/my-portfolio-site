import { FaDownload } from "react-icons/fa6"

import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

// import Particles from 'react-particles-js';

import { motion } from "framer-motion";


const About = () => {
    
    return (
        <section id="about" className="">
            <div className=" hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row bg-blue-950  px-8 py-12">
                    <div>
                        <motion.img
                            initial={{x: 100, opacity:0}}
                            whileInView={{x:0, opacity:1}}
                            transition={{
                                delay:0.2, 
                                x:{type:"spring", stiffness:60 }, 
                                opacity:{duration:1.5 },
                                ease:"easeIn",
                                duration: 1, 
                            }}
                            src="https://i.ibb.co/pjfYwy0/fotor-2023-4-16-13-17-16.png"
                            className="max-w-sm"
                        />
                        <div className="grid grid-flow-col gap-0 pt-8">
                            <motion.a 
                                initial={{x: 100, opacity:0}}
                                whileInView={{x:0, opacity:1}}
                                transition={{
                                    delay:0.4, 
                                    x:{type:"spring", stiffness:60 }, 
                                    opacity:{duration:1.5 },
                                    ease:"easeIn",
                                    duration: 1, 
                                }}
                                href="https://www.linkedin.com/in/salman-junaed-islam-b76367a9/" 
                                target="blank"
                            >
                                <FaLinkedin className="text-white text-6xl font-bold pl-4 hover:text-green-600 hover:text-7xl duration-300 "  />
                            </motion.a>
                            <motion.a
                                initial={{y: 100, opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{
                                    delay:0.1, 
                                    x:{type:"spring", stiffness:60 }, 
                                    opacity:{duration:1.5 },
                                    ease:"easeIn",
                                    duration: 1, 
                                }}
                                href="https://www.facebook.com/salman1.junaed/" 
                                target="blank"
                            >
                                <FaFacebookSquare className="text-white text-6xl font-bold pl-4 hover:text-green-600 hover:text-7xl duration-300 "/>
                            </motion.a>
                            <motion.a 
                                initial={{x: -100, opacity:0}}
                                whileInView={{x:0, opacity:1}}
                                transition={{
                                    delay:0.6, 
                                    x:{type:"spring", stiffness:60 }, 
                                    opacity:{duration:1.5 },
                                    ease:"easeIn",
                                    duration: 1, 
                                }}
                                href="https://github.com/SalmanJunaed" 
                                target="blank"
                            >
                                <FaGithubSquare className="text-white text-6xl font-bold pl-4 hover:text-green-600 hover:text-7xl duration-300 " />
                            </motion.a>
                        </div>
                        <motion.div 
                            initial={{x: -100, opacity:0}}
                            whileInView={{x:0, opacity:1}}
                            transition={{
                                delay:0.6, 
                                x:{type:"spring", stiffness:60 }, 
                                opacity:{duration:1.5 },
                                ease:"easeIn",
                                duration: 1, 
                            }}
                            className=" text-center pt-8"
                        >
                            <a href="https://drive.google.com/drive/folders/1zJ4n9LWGK95mP1J3746yvzMC3pgxRe0M?usp=sharing" target="blank">
                                <button className="btn btn-primary btn-wide"><FaDownload/> Download </button>
                            </a>
                        </motion.div>
                    </div>
                    <div className="text-white">
                        <motion.h1 
                            initial={{y: -100, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{
                                delay:0.2, 
                                x:{type:"spring", stiffness:60 }, 
                                opacity:{duration:1.5 },
                                ease:"easeIn",
                                duration: 1, 
                            }}
                            className="text-4xl underline uppercase text-white text-center font-bold"
                        >
                            About Salman
                        </motion.h1>
                        <motion.p
                            initial={{y: 100, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{
                                delay:0.4, 
                                x:{type:"spring", stiffness:60 }, 
                                opacity:{duration:1.5 },
                                ease:"easeIn",
                                duration: 1, 
                            }}
                            className="py-6 text-lg px-12"
                        >
                        Seeking a challenging MERN developer role where I can architect innovative solutions by leveraging the full potential of the MERN stack. My objective is to craft robust, scalable applications that push the boundaries of user experience and functionality. I aim to apply my expertise in MongoDB, Express.js, React.js, and Node.js to create responsive, high-performance web applications that delight users and drive business growth. With a focus on clean, maintainable code and a passion for staying updated with emerging technologies, I aspire to contribute my problem-solving skills and creativity to a dynamic team. I am dedicated to delivering elegant solutions that not only meet but exceed client expectations, while continuously learning and adapting in a fast-paced, collaborative environment.
                        </motion.p>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
