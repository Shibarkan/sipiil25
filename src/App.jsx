import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Presensi from './pages/Presensi';
import Biodata from './pages/Biodata';

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