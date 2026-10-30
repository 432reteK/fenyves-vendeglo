
const SUPABASE_URL = "https://yuypsaryfmocyuhatunk.supabase.co";

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1eXBzYXJ5Zm1vY3l1aGF0dW5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMzOTY1MDgsImV4cCI6MjEwODk3MjUwOH0.kmyzO3t5ED9lqq8BpLEgG2jNptzoUqYHDajwiPYa6XA";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
