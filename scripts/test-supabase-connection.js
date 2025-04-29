// Simple script to test Supabase connection
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env.development') });

async function testSupabaseConnection() {
  console.log('Testing Supabase connection...');
  
  // Create Supabase client
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Error: Supabase URL or anon key is missing in environment variables');
    process.exit(1);
  }

  console.log(`Connecting to Supabase URL: ${supabaseUrl}`);
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  
  try {
    // Test query - get current timestamp from Supabase
    const { data, error } = await supabase.rpc('get_timestamp');
    
    if (error) {
      throw error;
    }
    
    console.log('✅ Successfully connected to Supabase!');
    console.log('Server timestamp:', data);
    
    // Try to get a list of tables to further verify connection
    const { data: tablesData, error: tablesError } = await supabase
      .from('pg_tables')
      .select('tablename')
      .eq('schemaname', 'public')
      .limit(5);
      
    if (tablesError) {
      console.log('Note: Could not retrieve table list, but connection is working');
    } else {
      console.log('Available tables:', tablesData.map(t => t.tablename).join(', '));
    }
    
  } catch (error) {
    console.error('❌ Failed to connect to Supabase:', error.message);
    process.exit(1);
  }
}

testSupabaseConnection().catch(err => {
  console.error('Unhandled error:', err);
  process.exit(1);
});
