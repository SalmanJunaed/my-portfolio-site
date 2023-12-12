

import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

import {TypeAnimation} from 'react-type-animation'

// import {motion} from 'framer-motion'

const Banner = () => {
    return (
        <section>
            {/* <img className='w-full' src={bannerImage}alt="" /> */}
            <div className="hero h-fit" style={{backgroundImage: 'url(https://i.ibb.co/frx77Lj/banner.png)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
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
                        <p className="mb-5 text-lg text-white">A passionate frontend REACT developer from Bangladesh, I have been working with react for 1 year and learning MERN stack development for 8 months. Enthusiastic about MERN development and looking to establish myself as a senior MERN developer within the next 2 years.</p>
                        <div className='grid grid-cols-3 gap-6'>
                            
                            <a className="btn text-2xl text-blue-800" href="https://www.linkedin.com/in/salman-junaed-islam-b76367a9"><FaLinkedin/></a>
                            <a className="btn text-2xl text-gray-600" href="https://github.com/SalmanJunaed"><FaSquareGithub/></a>
                            <a className="btn text-2xl text-blue-500" href="https://www.facebook.com/salman1.junaed"><FaFacebookSquare/> </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;