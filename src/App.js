import './App.css';
import Header from './components/header1/Header';
import QuienesSom from './components/quienesSomos1/QuienesSom';
import QuienesSom2 from './components/quienesSomos2/QuienesSom2';
import Drag from "./components/drag/Drag"
import Footer from './components/footer1/Footer';
import Servicios from './components/servicios/Servicios';
import Profesionales from './components/profesionales/Profesionales';
import Contacto from './components/contacto/Contacto';
import { useEffect } from 'react';

function App() {
  
  return (
    <div className="App">
      <Header />

      <main>
        <>
          <QuienesSom />
          <QuienesSom2 />
          <Servicios />
          <Profesionales/>
          <Contacto />
          <Drag />
        </>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
