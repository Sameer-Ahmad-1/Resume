import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lguocjzbwejgiljqzfbv.supabase.co'; // Replace with real URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxndW9janpid2VqZ2lsanF6ZmJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxODIxNDYsImV4cCI6MjA2Mjc1ODE0Nn0.hpMfXXQ8qevhriOTkkMuvch1CohXYpVeq-MyJtgOm9Q'; // Replace with real key

export const supabase = createClient(supabaseUrl, supabaseKey);
