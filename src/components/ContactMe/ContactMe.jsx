// import { motion } from "framer-motion";

import emailjs from '@emailjs/browser';
import { useRef } from 'react';

import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { GrSend } from "react-icons/gr";

import { motion } from "framer-motion";

const ContactMe = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            'service_k29sz0a', 
            'template_gqn8v3v', 
            form.current, 
            'vZdRDK1JaFzFbDcNd'
        )
        .then((result) => {
                console.log(result.text);
            }, 
            (error) => {
            console.log(error.text);
            }
        );
    };
    return (
        <section id="contact" className="my-8">
            <div className="hero min-h-fit bg-[url('https://i.ibb.co/TLnjK2Y/5166950.jpg')] py-16">
                <div className="hero-content flex-col lg:flex-row-reverse text-white">
                    {/* Right side */}
                    <div className=" flex-1 text-center lg:text-left px-12 text-white">
                        <motion.h1 
                            initial={{x: -100, opacity:0}}
                            whileInView={{x:0, opacity:1}}
                            transition={{
                                delay:0.2, 
                                x:{type:"spring", stiffness:60 }, 
                                opacity:{duration:1.5 },
                                ease:"easeIn",
                                duration: 1, 
                            }}
                            className="text-5xl font-bold text-center text-gray-300"
                        >
                            Contact us!
                        </motion.h1>
                        <motion.p 
                            initial={{x: 100, opacity:0}}
                            whileInView={{x:0, opacity:1}}
                            transition={{
                                delay:0.4, 
                                x:{type:"spring", stiffness:60 }, 
                                opacity:{duration:1.5 },
                                ease:"easeIn",
                                duration: 1, 
                            }}
                            className="py-6 text-xl"
                        >
                            Put your Name, Email Address and Massage to contact with us. 
                            <br />
                            Do Not hesitate to Call, Whatsapp or e-mail me. 
                        </motion.p>
                        
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
                            className='flex gap-4'
                        >
                            <HiOutlineMailOpen className='text-sky-500 text-7xl font-bold pl-4 hover:text-green-400 hover:text-8xl duration-300 ' />
                            <span>
                                <p>Email Address</p>
                                <p className='font-bold '>salman9blog@gmail.com</p>
                            </span>
                        </motion.div>
                        <br />
                        <motion.div 
                            initial={{x: 100, opacity:0}}
                            whileInView={{x:0, opacity:1}}
                            transition={{
                                delay:0.8, 
                                x:{type:"spring", stiffness:60 }, 
                                opacity:{duration:1.5 },
                                ease:"easeIn",
                                duration: 1, 
                            }}
                            className='flex gap-5'
                        >
                            <FaPhoneSquareAlt className='text-sky-500 text-6xl font-bold pl-4 hover:text-green-400 hover:text-8xl duration-300 ' />
                            <span>
                                <p>Phone Number</p>
                                <p className='font-bold'>+8801734142238</p>
                            </span>
                        </motion.div>
                        <motion.p
                            initial={{y: 100, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{
                                delay:0.2, 
                                x:{type:"spring", stiffness:60 }, 
                                opacity:{duration:1.5 },
                                ease:"easeIn",
                                duration: 1, 
                            }}
                            className="py-2 text-center text-4xl font-bold text-blue-200 pt-8"
                        >
                            Thank You. 
                        </motion.p>
                    </div>
                    {/* Left Side */}
                    <motion.div
                        initial={{x: 100, opacity:0}}
                        whileInView={{x:0, opacity:1}}
                        transition={{
                            delay:0.2, 
                            x:{type:"spring", stiffness:60 }, 
                            opacity:{duration:1.5 },
                            ease:"easeIn",
                            duration: 1, 
                        }}
                        className=" flex-1 card w-full shadow-2xl from-transparent px-12"
                    >
                        <form ref={form} onSubmit={sendEmail} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold text-white">Name:</span>
                                </label>
                                <input name="user_name" type="text" placeholder="Your Name" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold text-white">Email Address</span>
                                </label>
                                <input name="user_email" type="email" placeholder="Your Email Address" className="input input-bordered text-black" required />
                            </div>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text text-lg font-bold text-white">Type your message</span>
                                </div>
                                <textarea name="message" className="textarea textarea-bordered h-24 text-black" placeholder="Type your message.........."></textarea>
                            </label>
                            <div className="form-control mt-6">
                                <button type="submit" value="Send" className="btn btn-primary">
                                    Send Massage<GrSend className='text-4xl font-bold pl-4' />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ContactMe
