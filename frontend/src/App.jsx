import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';
import ReadAll from './Components/ReadAll';
import Create from './Components/Create';

function App() {

  return (
    <div className="App">
      <Header />
      <main className="content">
          <Routes>
            <Route path="/" element={<ReadAll />} />
            <Route path="/adicionar" element={<Create />} />
          </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
