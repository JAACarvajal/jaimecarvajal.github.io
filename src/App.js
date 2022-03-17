import './css/App.css';
import Container from './components/Container';
import About from './components/About';
import Sample from './components/Projects/Sample';

function App() {
  return (
    <div className="flex main-app-wrapper">
      <Container>
        <About />
      </Container>

      <Container>
        <Sample />
      </Container>
    </div>
      
  );
}

export default App;
