import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nemgpmyddbhgqqzgrapt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lbWdwbXlkZGJoZ3FxemdyYXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3NzE4ODcsImV4cCI6MjAyNTM0Nzg4N30.oY5eeY2-VhFX8FCWVQIam29eyWTSpWmFQqmJKnSe2nM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
