import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jfyimiwinrmgueqfsysb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmeWltaXdpbnJtZ3VlcWZzeXNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk3Mjc5NTksImV4cCI6MjEwNTMwMzk1OX0.qMQprmqGzTMCZMW8Id01hUCKoMmzbFKwWpuklcwBprw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);