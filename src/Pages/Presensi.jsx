import { useState, useEffect } from 'react';

// Data sementara (Nanti akan diambil dari Supabase 'master_mahasiswa')
const dummyMahasiswa = [
  { nim: "21010125120001", nama: "Budi Santoso", kelas: "A" },
  { nim: "21010125120002", nama: "Siti Aminah", kelas: "B" },
  { nim: "21010125130003", nama: "Andi Saputra", kelas: "C" },
  { nim: "21010125140004", nama: "Rina Melati", kelas: "D" },
  { nim: "21010125140005", nama: "Dodi Pratama", kelas: "E" },
];

function Presensi() {
  const [formData, setFormData] = useState({
    kelas: '',
    nim: '',
    nama: '',
    asal: '',
    foto: null
  });

  const [mahasiswaFilter, setMahasiswaFilter] = useState([]);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Efek ini berjalan setiap kali 'kelas' diubah
  useEffect(() => {
    if (formData.kelas) {
      // Filter daftar nama berdasarkan kelas yang dipilih
      const filterData = dummyMahasiswa.filter(m => m.kelas === formData.kelas);
      setMahasiswaFilter(filterData);
      // Reset nama dan nim jika kelas diubah
      setFormData(prev => ({ ...prev, nama: '', nim: '' }));
    } else {
      setMahasiswaFilter([]);
    }
  }, [formData.kelas]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'nama') {
      // Jika nama dipilih, otomatis cari dan isi NIM-nya
      const selectedMhs = mahasiswaFilter.find(m => m.nama === value);
      setFormData({
        ...formData,
        nama: value,
        nim: selectedMhs ? selectedMhs.nim : ''
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, foto: file });
      // Membuat URL sementara untuk menampilkan preview gambar
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Di sinilah nanti logika pemisahan Supabase 1 (A&B) dan Supabase 2 (C&D) diletakkan
    console.log("Data siap dikirim:", formData);
    alert("Cek console untuk melihat data yang siap dikirim!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-blue-900">Form Presensi</h2>
          <p className="text-gray-500 mt-2">Teknik Sipil Universitas Diponegoro</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Pilihan Kelas */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Kelas</label>
            <select
              name="kelas"
              value={formData.kelas}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-gray-50"
            >
              <option value="">-- Pilih Kelas --</option>
              <option value="A">Kelas A</option>
              <option value="B">Kelas B</option>
              <option value="C">Kelas C</option>
              <option value="D">Kelas D</option>
              <option value="E">Kelas E</option>
            </select>
          </div>

          {/* Pilihan Nama (Muncul setelah memilih kelas) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Nama Mahasiswa</label>
            <select
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
              disabled={!formData.kelas}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-gray-50 disabled:bg-gray-200 disabled:cursor-not-allowed"
            >
              <option value="">{formData.kelas ? '-- Pilih Nama Kamu --' : '-- Pilih Kelas Dulu --'}</option>
              {mahasiswaFilter.map((mhs) => (
                <option key={mhs.nim} value={mhs.nama}>{mhs.nama}</option>
              ))}
            </select>
          </div>

          {/* NIM Otomatis (Read-Only) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">NIM (Otomatis)</label>
            <input
              type="text"
              name="nim"
              value={formData.nim}
              readOnly
              placeholder="NIM akan terisi otomatis"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-100 text-gray-600 font-mono cursor-not-allowed"
            />
          </div>

          {/* Input Asal */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Asal / Domisili</label>
            <input
              type="text"
              name="asal"
              value={formData.asal}
              onChange={handleChange}
              required
              placeholder="Contoh: Semarang, Jakarta, dll."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-gray-50"
            />
          </div>

          {/* Upload Foto (Kamera / Galeri) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Foto Bukti Presensi</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="space-y-1 text-center">
                
                {/* Tampilan Preview Gambar jika sudah upload */}
                {previewUrl ? (
                  <div className="mb-4">
                    <img src={previewUrl} alt="Preview" className="mx-auto h-32 w-auto rounded-lg shadow-sm" />
                  </div>
                ) : (
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                
                <div className="flex text-sm text-gray-600 justify-center">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                    <span>{previewUrl ? 'Ganti Foto' : 'Pilih Foto'}</span>
                    <input 
                      id="file-upload" 
                      name="file-upload" 
                      type="file" 
                      accept="image/*"
                      capture="environment" // Fitur agar di HP bisa langsung buka kamera
                      className="sr-only" 
                      onChange={handleFileChange}
                      required={!previewUrl}
                    />
                  </label>
                  {!previewUrl && <p className="pl-1">atau drag and drop</p>}
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, JPEG up to 5MB</p>
              </div>
            </div>
          </div>

          {/* Tombol Submit */}
          <button
            type="submit"
            className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:-translate-y-1"
          >
            Kirim Presensi
          </button>
        </form>
      </div>
    </div>
  );
}

export default Presensi;