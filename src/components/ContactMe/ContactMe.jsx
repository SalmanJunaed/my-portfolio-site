// import { motion } from "framer-motion";

import emailjs from '@emailjs/browser';
import { useRef } from 'react';

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
            <div className="hero min-h-fit bg-blue-200 py-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=" flex-1 text-center lg:text-left px-12">
                        <h1 className="text-5xl font-bold text-center">Contact us!</h1>
                        <p className="py-6">
                            Put your Name, Email Address and Massage to contact with us. 
                        </p>
                        <p className="py-2 text-center text-xl font-bold text-blue-600">
                            Thank you. 
                        </p>
                    </div>
                    <div className=" flex-1 card w-full shadow-2xl bg-base-100 px-12">
                        <form ref={form} onSubmit={sendEmail} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name:</span>
                                </label>
                                <input name="user_name" type="text" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email Address</span>
                                </label>
                                <input name="user_email" type="email" placeholder="Your Email Address" className="input input-bordered" required />
                            </div>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Your bio</span>
                                </div>
                                <textarea name="message" className="textarea textarea-bordered h-24" placeholder="Type your message.........."></textarea>
                            </label>
                            <div className="form-control mt-6">
                                <button type="submit" value="Send" className="btn btn-primary">
                                    Send Massage
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMe
