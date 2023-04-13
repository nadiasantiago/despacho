import './App.css';
import Header from './components/header/Header';
import QuienesSom from './components/quienesSomos1/QuienesSom';
import QuienesSom2 from './components/quienesSomos2/QuienesSom2';

import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <>
          <QuienesSom />
          <QuienesSom2 />
        </>
        {/* <>
        </> */}
      </main>

      <Footer/>
    </div>
  );
}

export default App;
