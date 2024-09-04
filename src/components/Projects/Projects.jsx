import "swiper/css"
import "swiper/css/pagination"

const Projects = () => {
    return (
        <section
            id="projects"
            className="my-12 bg-gradient-to-r from-purple-700  via-indigo-600 to-slate-700 mx-auto"
        >
            <h1 className="text-4xl underline uppercase text-white text-center font-bold py-12">
                {" "}
                Projects
            </h1>

            <div className=" px-8 py-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {/* Card - 1 */}
                <div className="card w-96 bg-blue-600 shadow-xl text-white hover:bg-slate-700">
                    <figure>
                        <img
                            src="https://i.ibb.co/1L6RDhN/portfolio-01.png"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold text-gray-200">
                            Asset Management System
                            {/* <div className="badge badge-secondary">NEW</div> */}
                        </h2>
                        <p className="text-center">Technologies:</p>
                        <div className="card-actions justify-center">
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                TailwindCSS
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                React.JS
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                Node.js
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                Express.js
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                MongoDB
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                DaisyUI
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                React Form
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                Axios
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                Tanstack Query
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                JWT
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                React Hook
                            </div>
                        </div>
                        <p>
                            Client Git link:{" "}
                            <a
                                href="https://github.com/programming-hero-web-course1/b8a12-client-side-SalmanJunaed"
                                className="text-green-400 font-bold"
                            >
                                Client Code
                            </a>
                        </p>
                        <p>
                            Server Git link:{" "}
                            <a
                                href="https://github.com/programming-hero-web-course1/b8a12-server-side-SalmanJunaed"
                                className="text-green-400 font-bold"
                            >
                                Server code
                            </a>
                        </p>
                        <p>
                            Live link:{" "}
                            <a
                                href="https://iridescent-frangollo-ab2c7e.netlify.app/"
                                className="text-green-400 font-bold"
                            >
                                Live Site
                            </a>
                        </p>
                        <p>
                            <span className="font-bold">Description: </span>
                            The Application will help to manage and utilize
                            assets properly in an office, and help to get
                            records of assets.
                        </p>
                    </div>
                </div>
                {/* Card - 2 */}
                <div className="card w-96 bg-blue-600 shadow-xl text-white hover:bg-slate-700">
                    <figure>
                        <img
                            src="https://i.ibb.co/Kjw7P0X/portfolio-02.png"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold text-gray-200">
                            Daily News Site
                            {/* <div className="badge badge-secondary">NEW</div> */}
                        </h2>
                        <p className="text-center">Technologies:</p>
                        <div className="card-actions justify-center">
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                TailwindCSS
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                React.JS
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                Node.js
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                Express.js
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                MongoDB
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                DaisyUI
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                Material UI Form
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                React form
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                React Hooks
                            </div>
                        </div>
                        <p>
                            Client Git link:{" "}
                            <a
                                href="https://github.com/Porgramming-Hero-web-course/b8a11-client-side-SalmanJunaed"
                                className="text-green-400 font-bold"
                            >
                                Client Code
                            </a>
                        </p>
                        <p>
                            Server Git link:{" "}
                            <a
                                href="https://github.com/Porgramming-Hero-web-course/b8a11-server-side-SalmanJunaed"
                                className="text-green-400 font-bold"
                            >
                                Server code
                            </a>
                        </p>
                        <p>
                            Live link:{" "}
                            <a
                                href="https://golden-gelato-6a160b.netlify.app/"
                                className="text-green-400 font-bold"
                            >
                                Live Site
                            </a>
                        </p>
                        <p>
                            <span className="font-bold">Description: </span>
                            It is a NEWS blog with very user-friendly features
                            that help access the site comfortably.
                        </p>
                    </div>
                </div>
                {/* Card - 3 */}
                {/* <div className="card w-96 bg-blue-600 shadow-xl text-white hover:bg-slate-700">
                    <figure>
                        <img
                            src="https://i.ibb.co/2gTWThZ/portfolio-03.png"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold text-gray-200">
                            Electronics Shop
                            
                            <div className="badge badge-secondary">NEW</div>
                            
                        </h2>
                        <p className="text-center">Technologies:</p>
                        <div className="card-actions justify-center">
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                TailwindCSS
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                React.JS
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                Node.js
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                Express.js
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                MongoDB
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                DaisyUI
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                React Form
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                Material UI Form
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                React Hook
                            </div>
                        </div>
                        <p>
                            Client Git link:{" "}
                            <a
                                href="https://github.com/programming-hero-web-course-4/b8a10-brandshop-client-side-SalmanJunaed"
                                className="text-green-400 font-bold"
                            >
                                Client Code
                            </a>
                        </p>
                        <p>
                            Server Git link:{" "}
                            <a
                                href="https://github.com/programming-hero-web-course-4/b8a10-brandshop-server-side-SalmanJunaed"
                                className="text-green-400 font-bold"
                            >
                                Server code
                            </a>
                        </p>
                        <p>
                            Live link:{" "}
                            <a
                                href="https://sparkly-sawine-505960.netlify.app/"
                                className="text-green-400 font-bold"
                            >
                                Live Site
                            </a>
                        </p>
                        <p>
                            <span className="font-bold">Description: </span>
                            It is a tech-related e-commerce site with an easy
                            and user-friendly UI.
                        </p>
                    </div>
                </div> */}
                {/* Card - 4 */}
                <div className="card w-96 bg-blue-600 shadow-xl text-white hover:bg-slate-700">
                    <figure>
                        <img
                            src="https://i.ibb.co/h2w2VPH/portfolio-04.png"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold text-gray-200">
                            Lets-Shop
                            {/* <div className="badge badge-secondary">NEW</div> */}
                        </h2>
                        <p className="text-center">Technologies:</p>
                        <div className="card-actions justify-center">
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                TailwindCSS
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                React.JS
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                Node.js
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                Express.js
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                MongoDB
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                DaisyUI
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                React Form
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                Material UI Form
                            </div>
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                React Hook
                            </div> 
                            <div className="outline outline-2 outline-offset-2 p-1 rounded-lg mx-1 my-2">
                                Framer Motion
                            </div>
                        </div>
                        <p>
                            Client Git link:{" "}
                            <a
                                href="https://github.com/SalmanJunaed/lets-shop-client"
                                className="text-green-400 font-bold"
                            >
                                Client Code
                            </a>
                        </p>
                        <p>
                            Server Git link:{" "}
                            <a
                                href="https://github.com/SalmanJunaed/lets-shop-server"
                                className="text-green-400 font-bold"
                            >
                                Server code
                            </a>
                        </p>
                        <p>
                            Live link:{" "}
                            <a
                                href="https://fascinating-bubblegum-34f6fd.netlify.app/"
                                className="text-green-400 font-bold"
                            >
                                Live Site
                            </a>
                        </p>
                        <p>
                            <span className="font-bold">Description: </span>
                            This project is an e-commerce site with an easy and user-friendly UI, Unique Dashboard and interactive Animation features.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
