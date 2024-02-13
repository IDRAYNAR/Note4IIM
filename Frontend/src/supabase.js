import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://lkhayewnehhxhqkckehs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxraGF5ZXduZWhoeGhxa2NrZWhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4OTc5NTMsImV4cCI6MjAxODQ3Mzk1M30.fKfRK_Dmx4KZ39za2coUrQGBbLJkrCbK_YIKEBbEQ6U';

const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };
