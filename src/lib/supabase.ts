import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://lnyxyggjwkekqzukzjrk.supabase.co";
const supabaseAnonKey = "1234";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
