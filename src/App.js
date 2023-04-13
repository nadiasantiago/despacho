import './App.css';
import Header from './components/header/Header';
import QuienesSom from './components/quienesSomos1/QuienesSom';

import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <QuienesSom />
        
      </main>

      <Footer/>
    </div>
  );
}

export default App;
