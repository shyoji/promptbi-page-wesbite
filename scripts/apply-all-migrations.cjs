const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = 'https://0ec90b57d6e95fcbda19832f.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJib2x0IiwicmVmIjoiMGVjOTBiNTdkNmU5NWZjYmRhMTk4MzJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4ODE1NzQsImV4cCI6MTc1ODg4MTU3NH0.9I8-U0x86Ak8t2DGaIk0HfvTSLsAyzdnz-Nw00mMkKw';

const supabase = createClient(supabaseUrl, supabaseKey);

async function applyMigrations() {
  const migrationsDir = path.join(__dirname, '..', 'supabase', 'migrations');
  const files = fs.readdirSync(migrationsDir).sort();

  console.log('Applying migrations from:', migrationsDir);
  console.log('Found migration files:', files);

  for (const file of files) {
    if (!file.endsWith('.sql')) continue;

    console.log(`\n📄 Reading migration: ${file}`);
    const filePath = path.join(migrationsDir, file);
    const sql = fs.readFileSync(filePath, 'utf-8');

    console.log(`⚙️  Applying migration: ${file}`);

    // Use the from().insert() pattern as a workaround to execute SQL
    // We'll need to use the REST API directly
    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`
        },
        body: JSON.stringify({ sql_query: sql })
      });

      if (response.ok) {
        console.log(`✅ Successfully applied: ${file}`);
      } else {
        const error = await response.text();
        console.log(`⚠️  Response for ${file}:`, error);
      }
    } catch (error) {
      console.error(`❌ Failed to apply ${file}:`, error.message);
    }
  }

  console.log('\n✨ Migration process completed!');
  console.log('\nPlease go to your Supabase SQL Editor and run each migration manually:');
  console.log('https://supabase.com/dashboard/project/YOUR_PROJECT/sql');
}

applyMigrations().catch(console.error);
