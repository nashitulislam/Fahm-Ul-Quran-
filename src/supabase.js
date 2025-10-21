import { createClient } from "@supabase/supabase-js";

// Supabase project URL aur anon key
export const supabase = createClient(
  "https://geognghitesjcsoiqldz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdlb2duZ2hpdGVzamNzb2lxbGR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5Mzk4NDMsImV4cCI6MjA3NjUxNTg0M30.htqWoXWk-jO00Wlgc-mFu7ZtbtEj40025MTjGidbues"
);
