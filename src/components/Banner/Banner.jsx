

// import { FaLinkedin } from "react-icons/fa6";
// import { FaSquareGithub } from "react-icons/fa6";
// import { FaFacebookSquare } from "react-icons/fa";

import {TypeAnimation} from 'react-type-animation'

// import {motion} from 'framer-motion'

const Banner = () => {
    return (
        <section>
            {/* <img className='w-full' src={bannerImage}alt="" /> */}
            <div className="hero h-fit" style={{backgroundImage: 'url(https://i.ibb.co/TLnjK2Y/5166950.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=" text-center text-neutral-content px-20 py-12">
                    <div className="max-w-fit">
                        {/* flex container */}
                        <div className=" flex flex-col lg:flex-row gap-24">
                            {/* Left side */}
                            <div className="px-24">
                                <h1 className="mb-2 text-5xl text-white font-bold upper"> Portfolio of Salman
                                <TypeAnimation
                                    sequence={[
                                        'Designer',
                                        2000,
                                        'Animator',
                                        2000,
                                        'AI & DataScience',
                                        2000,
                                        'Developer',
                                        2000,
                                    ]}
                                    speed={50}
                                    className='text-green-600'
                                    wrapper='h1'
                                    repeat={Infinity}
                                >
                                
                                </TypeAnimation>
                                </h1>
                                <p className="mb-5 text-lg text-white">A passionate MERN Stack focused REACT developer from Bangladesh, I have been working with react for 1 year 6 months and learning MERN stack related technologies for advanced development for 1 years. Enthusiastic about MERN development and looking to establish myself as a senior MERN developer within the next 3 years.</p>
                                {/* Social media buttons */}
                                {/* <div className='grid grid-cols-3 gap-6'>
                                    <a className="btn text-2xl text-blue-800" href="https://www.linkedin.com/in/salman-junaed-islam-b76367a9"><FaLinkedin/></a>
                                    <a className="btn text-2xl text-gray-600" href="https://github.com/SalmanJunaed"><FaSquareGithub/></a>
                                    <a className="btn text-2xl text-blue-500" href="https://www.facebook.com/salman1.junaed"><FaFacebookSquare/> </a>
                                </div> */}
                            </div>
                            {/* Right side */}
                            <div>
                                <img
                                    src="https://i.ibb.co/pPQ5mnX/d-P1-fotor-20231209174345.png"
                                    className="max-w-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;