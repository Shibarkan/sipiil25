import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Presensi from './pages/Presensi.jsx';
import Biodata from './pages/Biodata.jsx';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header akan selalu tampil */}
      <Header />

      {/* Area konten dinamis */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presensi" element={<Presensi />} />
          <Route path="/biodata" element={<Biodata />} />
        </Routes>
      </main>

      {/* Footer akan selalu tampil di bawah */}
      <Footer />
    </div>
  );
}

export default App;