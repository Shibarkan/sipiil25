function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        
        <div>
          <h3 className="text-lg font-bold text-blue-900">Teknik Sipil Angkatan 2025</h3>
          <p className="text-sm text-gray-600 mt-1">Universitas Diponegoro</p>
        </div>

        <div className="text-sm text-gray-500 font-medium">
          &copy; {currentYear} Divisi IT Sipil '25. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;