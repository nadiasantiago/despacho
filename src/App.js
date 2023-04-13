import './App.css';
import Header from './components/Header/Header';
import QuienesSom from './components/quienesSomos1/QuienesSom';
import QuienesSom2 from './components/quienesSomos2/QuienesSom2';
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
    </div>
  );
}

export default App;
