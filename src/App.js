import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import './App.css';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Components
import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'


function App() {

  const packages = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath']


  return (
    <div className="App">
      <Router>
        <header>

          <Navbar bg="primary" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="/">Monty's</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/packages">Our Packages</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <h1 className="title">Welcome to Monty's Mineral SPA</h1>

        </header>

        <div className="display">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/packages" element={<Packages packages={packages} />} />
          </Routes>
        </div>

      </Router>

    </div>
  );
}

export default App;
