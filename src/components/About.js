import '../index.css';
import '../css/App.css';

function About() {
  return (
    <div className="about p-4">
        <div className="title mb-8 text-white">
            <h1 className="text-6xl tracking-wider font-bold">
                NAME
            </h1>
            <h2 className="text-4xl tracking-wider">
                Working at ...
            </h2>
        </div>
        <div className="description mb-8 text-white">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
  );
}

export default About;
