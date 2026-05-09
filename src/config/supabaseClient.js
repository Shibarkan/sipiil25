import { createClient } from '@supabase/supabase-js';

// Konfigurasi Database 1
const supabaseUrl1 = import.meta.env.VITE_SUPABASE_URL_1;
const supabaseAnonKey1 = import.meta.env.VITE_SUPABASE_ANON_KEY_1;

export const supabase1 = createClient(supabaseUrl1, supabaseAnonKey1);

// Konfigurasi Database 2
const supabaseUrl2 = import.meta.env.VITE_SUPABASE_URL_2;
const supabaseAnonKey2 = import.meta.env.VITE_SUPABASE_ANON_KEY_2;

export const supabase2 = createClient(supabaseUrl2, supabaseAnonKey2);