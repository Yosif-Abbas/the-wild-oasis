import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://vxbdfptuyfpikemovsxb.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4YmRmcHR1eWZwaWtlbW92c3hiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MTYxNjM3NCwiZXhwIjoyMDU3MTkyMzc0fQ.Bd8ViU2jy9QS15l5acmE1s9xQlaqX54KgGuxGSA11Q8';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
