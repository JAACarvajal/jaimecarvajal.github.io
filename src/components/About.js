import '../index.css';
import '../css/App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function About() {
  return (
    <div className="about flex flex-col p-10">
        <div className="title mb-8 text-white">
            <h1 className="text-4xl tracking-wider leading-none font-bold">
                JAIME ALEJANDRO A. CARVAJAL II
            </h1>
            <h2 className="text-3xl tracking-wider">
                Web Developer at Cafe24 Inc
            </h2>
        </div>
        <div className="description mb-8 text-white w-4/5">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className="navigation mb-8 text-white w-4/5">
            <p>Projects</p>
        </div>

        <div className="socials mb-8 text-white w-4/5">
            <p className="underline mb-2">Socials</p>
            <a className="flex items-center gap-1" href="https://www.linkedin.com/in/jaime-alejandro-carvajal-ii-78a1181a0/" target='_blank' rel="noopener noreferrer" >
                <FontAwesomeIcon className='text-2xl' icon={faLinkedin} />
                <span className="mt-0.5">Linkedin</span></a>
        </div>
    </div>
  );
}

export default About;
