import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import ContactMe from "../../components/ContactMe/ContactMe";
import Education from "../../components/Education/Education";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import WorkExperience from "../../components/WorkExperience/WorkExperience";



const Home = () => {
    return (
        <div className="
            bg-gradient-to-r from-indigo-700 via-purple-800 to-slate-800
        ">
            {/* <h1 className="text-3xl text-center uppercase font-bold underline">
                Resume site
            </h1> */}
            <div className="bg-slate bg-no-repeat bg cover overflow-hidden">
                <Header/>
                <Banner/>
                <Navbar/>
                <About/>
                <Skills/>
                <Projects/>
                <WorkExperience/>
                <Education/>
                <ContactMe/>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;