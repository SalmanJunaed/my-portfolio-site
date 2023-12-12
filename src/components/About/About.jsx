import { FaDownload } from "react-icons/fa6"

const About = () => {
    return (
        <section id="about" className="my-8">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="https://i.ibb.co/pPQ5mnX/d-P1-fotor-20231209174345.png"
                        className="max-w-sm"
                    />
                    <div>
                        <h1 className="text-3xl font-bold">About Salman Junaed Islam</h1>
                        <p className="py-6 text-lg">
                        Seeking a challenging MERN developer role where I can architect innovative solutions by leveraging the full potential of the MERN stack. My objective is to craft robust, scalable applications that push the boundaries of user experience and functionality. I aim to apply my expertise in MongoDB, Express.js, React.js, and Node.js to create responsive, high-performance web applications that delight users and drive business growth. With a focus on clean, maintainable code and a passion for staying updated with emerging technologies, I aspire to contribute my problem-solving skills and creativity to a dynamic team. I am dedicated to delivering elegant solutions that not only meet but exceed client expectations, while continuously learning and adapting in a fast-paced, collaborative environment.
                        </p>
                        <a href='banner_.png' download='Salman_Resume.png' className="btn btn-primary"> <FaDownload /> Download My Resume</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
