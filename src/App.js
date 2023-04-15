import './App.css';
import Header from './components/header1/Header';
import QuienesSom from './components/quienesSomos1/QuienesSom';
import QuienesSom2 from './components/quienesSomos2/QuienesSom2';

import Footer from './components/footer1/Footer';
function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <>
          <QuienesSom />
          <QuienesSom2 />


          <Drag />
        </>
        {/* <>
        </> */}
      </main>

      <Footer/>
    </div>
  );
}

export default App;
