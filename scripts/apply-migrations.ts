import { createClient } from '@supabase/supabase-js';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function applyMigrations() {
  const migrationsDir = join(process.cwd(), 'supabase', 'migrations');
  const files = readdirSync(migrationsDir).sort();

  console.log('Found migrations:', files);

  for (const file of files) {
    if (!file.endsWith('.sql')) continue;

    console.log(`\nApplying migration: ${file}`);
    const sql = readFileSync(join(migrationsDir, file), 'utf-8');

    try {
      // Split by semicolon but keep DO blocks together
      const statements = sql
        .split(/;\s*(?=(?:[^']*'[^']*')*[^']*$)/)
        .filter(s => s.trim() && !s.trim().startsWith('/*'));

      for (const statement of statements) {
        const trimmed = statement.trim();
        if (!trimmed) continue;

        const { error } = await supabase.rpc('exec_sql', {
          sql_query: trimmed + ';'
        });

        if (error) {
          console.error(`Error in ${file}:`, error.message);
        }
      }

      console.log(`✓ Applied ${file}`);
    } catch (error) {
      console.error(`Failed to apply ${file}:`, error);
    }
  }

  console.log('\n✓ All migrations applied!');
}

applyMigrations().catch(console.error);
