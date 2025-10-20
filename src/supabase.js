// src/supabase.js
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ouuylqwsahvwaoxipjum.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91dXlscXdzYWh2d2FveGlwanVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5MDU5ODYsImV4cCI6MjA3NjQ4MTk4Nn0.XkA9_WH4vQ3AM_7jOdJOxjrZwE_A9XAq42Gn0F3z14Y"
);
