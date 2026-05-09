import { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase1, supabase2 } from '../config/supabaseClient'; 

function Home() {
  const [status1, setStatus1] = useState('Belum dicek');
  const [status2, setStatus2] = useState('Belum dicek');

  const handleCekKoneksi = async () => {
    setStatus1('Mengecek...');
    setStatus2('Mengecek...');

    try {
      const { error: err1 } = await supabase1.auth.getSession();
      if (!err1) setStatus1('✅ Terhubung');
      else setStatus1(`❌ Gagal: ${err1.message}`);
    } catch (err) {
      setStatus1('❌ Gagal: Cek URL/Key');
    }

    try {
      const { error: err2 } = await supabase2.auth.getSession();
      if (!err2) setStatus2('✅ Terhubung');
      else setStatus2(`❌ Gagal: ${err2.message}`);
    } catch (err) {
      setStatus2('❌ Gagal: Cek URL/Key');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="text-center bg-white p-10 rounded-3xl shadow-xl max-w-lg w-full border border-gray-100">
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-2">
          Teknik Sipil '25
        </h1>
        <h2 className="text-xl font-medium text-gray-600 mb-8">
          Universitas Diponegoro
        </h2>
        
        {/* Kontainer Tombol Utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Link 
            to="/presensi"
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-2xl shadow-md transition-transform transform hover:-translate-y-1"
          >
            📋 Presensi
          </Link>
          <Link 
            to="/biodata"
            className="flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-6 rounded-2xl shadow-md transition-transform transform hover:-translate-y-1"
          >
            📇 Biodata
          </Link>
        </div>

        <hr className="my-6 border-gray-200" />

        {/* Panel Cek Koneksi */}
        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 text-left">
          <h3 className="font-bold text-gray-800 mb-4 text-center">Status Server Database</h3>
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-gray-600">DB 1 (Kelas A, B):</span>
            <span className={`text-sm font-bold ${status1.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
              {status1}
            </span>
          </div>
          <div className="flex justify-between items-center mb-5">
            <span className="text-sm font-semibold text-gray-600">DB 2 (Kelas C, D):</span>
            <span className={`text-sm font-bold ${status2.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
              {status2}
            </span>
          </div>
          
          <button 
            onClick={handleCekKoneksi}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-xl text-sm transition-colors border border-gray-300"
          >
            ⚡ Test Koneksi
          </button>
        </div>

      </div>
    </div>
  );
}

export default Home;