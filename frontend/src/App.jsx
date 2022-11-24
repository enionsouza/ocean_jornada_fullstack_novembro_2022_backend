import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ReadAll from './Components/ReadAll';
import Create from './Components/Create';
import ReadById from './Components/ReadById';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <main className="content">
          <Routes>
            <Route path="/" element={<ReadAll />} />
            <Route path="/adicionar" element={<Create />} />
            <Route path="/visualizar/:id"
            element={<ReadById  />} />
          </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
