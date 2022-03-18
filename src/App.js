import './css/App.css';
import Container from './components/Common/Container';
import ContainerCenter from './components/Common/ContainerCenter';
import About from './components/About';
import Sample from './components/Projects/Sample';

function App() {
  return (
    <div className="flex items-center justify-center main-app-wrapper">
      <ContainerCenter>
        <About />
      </ContainerCenter>

      <Container>
        <Sample />
        <Sample />
      </Container>
    </div>
      
  );
}

export default App;
