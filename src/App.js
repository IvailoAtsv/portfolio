import 'bootstrap/dist/css/bootstrap.min.css'
import { Hero } from './components/Hero/Hero';
import Head from './components/Navbar';
import { Container } from 'react-bootstrap';

function App() {

  return (
    <Container className='bg-dark p-0' fluid >
      <Head />
      <Hero />
    </Container>
  );
}

export default App;