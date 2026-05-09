import { useState } from 'react';
import { Link } from 'react-router-dom';

function Presensi() {
  const [riwayat, setRiwayat] = useState([]);

  const handleAbsen = () => {
    const waktu = new Date().toLocaleTimeString('id-ID');
    setRiwayat([...riwayat, { id: Date.now(), status: 'Hadir', waktu }]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 relative">
        {/* Tombol Kembali */}
        <Link to="/" className="text-sm text-blue-600 hover:underline mb-6 inline-block">
          &larr; Kembali ke Beranda
        </Link>
        
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Portal Presensi
        </h1>

        <button
          onClick={handleAbsen}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-300"
        >
          Absen Sekarang
        </button>

        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">
            Riwayat Hari Ini
          </h2>
          
          <ul className="space-y-3">
            {riwayat.map((item) => (
              <li key={item.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                <span className="font-medium text-green-600">{item.status}</span>
                <span className="text-gray-500 text-sm font-mono">{item.waktu}</span>
              </li>
            ))}
            
            {riwayat.length === 0 && (
              <p className="text-center text-gray-400 text-sm italic mt-4">
                Belum ada data presensi.
              </p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Presensi;