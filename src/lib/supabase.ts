import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://lnyxyggjwkekqzukzjrk.supabase.co";

const supabaseAnonKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxueXh5Z2dqd2tla3F6dWt6anJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzNDIyNzEsImV4cCI6MjA3NDkxODI3MX0.GP1FQB606x9el93GEVn2bYG6Px4eVwaDNCSi-fOItNE"


export const supabase = createClient(supabaseUrl, supabaseAnonKey);
