import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Memuat variabel dari file .env
dotenv.config();

const supabaseUrl1 = process.env.VITE_SUPABASE_URL_1;
const supabaseAnonKey1 = process.env.VITE_SUPABASE_ANON_KEY_1;

const supabaseUrl2 = process.env.VITE_SUPABASE_URL_2;
const supabaseAnonKey2 = process.env.VITE_SUPABASE_ANON_KEY_2;

// Inisiasi database
const supabase1 = createClient(supabaseUrl1, supabaseAnonKey1);
const supabase2 = createClient(supabaseUrl2, supabaseAnonKey2);

async function testConnection() {
  console.log('Mengecek Supabase 1 (Utama)...');
  
  // Cara cek koneksi paling murni tanpa butuh tabel apapun
  // Kita coba ping API Auth-nya Supabase
  const { error: err1 } = await supabase1.auth.getSession();
  
  if (!err1) {
    console.log('✅ Supabase 1: CONNECTED!');
  } else {
    console.log('❌ Supabase 1 GAGAL:', err1.message);
  }

  console.log('\nMengecek Supabase 2 (Backup)...');
  
  const { error: err2 } = await supabase2.auth.getSession();
  
  if (!err2) {
    console.log('✅ Supabase 2: CONNECTED!');
  } else {
    console.log('❌ Supabase 2 GAGAL:', err2.message);
  }
}

testConnection();