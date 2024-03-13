/*
** ****************************************************************************
** This utility file provides a function to create a Supabase client configured
** for server-side usage within a Next.js application. It integrates with Next.js's
** cookie API to manage cookies for authentication and session management.
** The function handles cookie operations such as get, set, and remove, with
** considerations for server-side execution contexts.
** ****************************************************************************
*/


import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { type cookies } from "next/headers";

export function createClient(cookieStore: ReturnType<typeof cookies>) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          // Retrieve a cookie value by its name
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          // Set a cookie with the specified name, value, and options
          try {
            cookieStore.set({ name, value, ...options });
          } catch (error) {
            // Handle errors, typically when called from a Server Component
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        remove(name: string, options: CookieOptions) {
          // Remove a cookie by setting its value to an empty string
          try {
            cookieStore.set({ name, value: "", ...options });
          } catch (error) {
            // Handle errors, similar to the set method
            // The `delete` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
}
