/**
 * Admin User Setup Script
 *
 * Run this script once to create the admin user.
 *
 * Usage:
 * 1. Make sure your .env file has VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
 * 2. Run: npx tsx scripts/setup-admin.ts
 *
 * Or manually create the user in Supabase Dashboard:
 * 1. Go to Authentication > Users
 * 2. Click "Add User"
 * 3. Email: ngugi@promptbi.ai
 * 4. Password: prompt2025Nairobi
 * 5. Enable "Auto Confirm User"
 * 6. Click "Create User"
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function setupAdmin() {
  console.log('Setting up admin user...');

  try {
    const { data, error } = await supabase.auth.signUp({
      email: 'ngugi@promptbi.ai',
      password: 'prompt2025Nairobi',
      options: {
        data: {
          role: 'admin'
        }
      }
    });

    if (error) {
      console.error('Error creating admin user:', error.message);
      console.log('\nPlease create the user manually in Supabase Dashboard:');
      console.log('1. Go to Authentication > Users');
      console.log('2. Click "Add User"');
      console.log('3. Email: ngugi@promptbi.ai');
      console.log('4. Password: prompt2025Nairobi');
      console.log('5. Enable "Auto Confirm User"');
      console.log('6. Click "Create User"');
      return;
    }

    console.log('✓ Admin user created successfully!');
    console.log('Email: ngugi@promptbi.ai');
    console.log('\nIf email confirmation is required, please check your email.');
    console.log('Or disable email confirmation in Supabase Dashboard:');
    console.log('Authentication > Settings > Enable email confirmations (turn OFF)');
  } catch (err) {
    console.error('Unexpected error:', err);
  }
}

setupAdmin();
