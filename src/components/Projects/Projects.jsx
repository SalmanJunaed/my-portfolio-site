import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import imgPort1 from '../../../public/portfolio-01.png';
import imgPort2 from '../../../public/portfolio-02.png'
import imgPort3 from '../../../public/portfolio-03.png'

const Projects = () => {
    return (
        <section id="projects" className="my-8">
            <h1 className="text-4xl underline uppercase text-white text-center font-bold pb-12"> Projects</h1>
            <Swiper className='py-8' slidesPerView={4} spaceBetween={30} centeredSlides={true} pagination={{ clickable: true, }} modules={[Pagination]} 
            // className="mySwiper"
            >
                {/* Card-1 */}
                <SwiperSlide>
                    <div className="card card-compact w-72 bg-base-100 shadow-xl my-8">
                        <figure><img src={imgPort1} alt="Shoes" /></figure>
                        <div className="card-body text-lg bg-slate-300 ">
                            <h2 className="card-title">Asset Management System</h2>
                            <p>Client Git link: <a href='https://github.com/programming-hero-web-course1/b8a12-client-side-SalmanJunaed' className='text-blue-600 font-bold'>Client Code</a></p>
                            <p>Server Git link: <a href='https://github.com/programming-hero-web-course1/b8a12-server-side-SalmanJunaed' className='text-blue-600 font-bold'>Server code</a></p>
                            <p>Live link: <a href='https://iridescent-frangollo-ab2c7e.netlify.app/' className='text-blue-600 font-bold'>Live Site</a></p>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Card-2 */}
                <SwiperSlide>
                    <div className="card card-compact w-72 bg-base-100 shadow-xl my-8">
                        <figure><img src={imgPort2} alt="Shoes" /></figure>
                        <div className="card-body text-lg bg-slate-300">
                            <h2 className="card-title">News Blog Site</h2>
                            <p>Client Git link: <a href='https://github.com/Porgramming-Hero-web-course/b8a11-client-side-SalmanJunaed' className='text-blue-600 font-bold'>Client Code</a></p>
                            <p>Server Git link: <a href='https://github.com/Porgramming-Hero-web-course/b8a11-server-side-SalmanJunaed' className='text-blue-600 font-bold'>Server code</a></p>
                            <p>Live link: <a href='https://golden-gelato-6a160b.netlify.app/' className='text-blue-600 font-bold'>Live Site</a></p>
                        </div>
                    </div>

                </SwiperSlide>
                {/* Card-3 */}
                <SwiperSlide>
                    <div className="card card-compact w-72 bg-base-100 shadow-xl my-8">
                        <figure><img src={imgPort3} alt="Shoes" /></figure>
                        <div className="card-body text-lg bg-slate-300">
                            <h2 className="card-title">Electronics shop</h2>
                            <p>Client Git link: <a href='https://github.com/programming-hero-web-course-4/b8a10-brandshop-client-side-SalmanJunaed' className='text-blue-600 font-bold'>Client Code</a></p>
                            <p>Server Git link: <a href='https://github.com/programming-hero-web-course-4/b8a10-brandshop-server-side-SalmanJunaed' className='text-blue-600 font-bold'>Server code</a></p>
                            <p>Live link: <a href='https://sparkly-sawine-505960.netlify.app/' className='text-blue-600 font-bold'>Live Site</a></p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Projects;