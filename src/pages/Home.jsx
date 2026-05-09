import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="text-center bg-white p-10 rounded-3xl shadow-xl max-w-lg w-full border border-gray-100">
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-2">
          Teknik Sipil '25 ANJAY
        </h1>
        <h2 className="text-xl font-medium text-gray-600 mb-8">
          Universitas Diponegoro
        </h2>
        
        {/* Kontainer Tombol Utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

      </div>
    </div>
  );
}

export default Home;