/*
** ****************************************************************************
** This utility file provides a function to create a Supabase client configured
** for client-side usage within a Next.js application. It leverages the
** `createBrowserClient` function from `@supabase/ssr` to initialize the client
** with environment variables specifying the Supabase URL and the anonymous
** public key. This setup is essential for interacting with Supabase services
** directly from the browser.
** ****************************************************************************
*/

import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}