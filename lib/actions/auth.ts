/*
** ****************************************************************************
** This file contains authentication-related actions for a Next.js application,
** specifically for server-side logic. It utilizes Supabase for user authentication,
** including functions for login, signup, and logout operations. These functions
** handle user credentials, manage authentication states, and perform redirects
** after successful operations. The use of `revalidatePath` and `redirect` from
** Next.js's server-side utilities facilitates immediate reflection of the user's
** authentication state across the application.
** ****************************************************************************
*/

"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

// Function to log in a user with email and password
export async function login(email: string, password: string) {
  // Initialize cookie store for session management
  const cookieStore = cookies();
  // Create a Supabase client instance
  const supabase = createClient(cookieStore);

  // Attempt to sign in with provided credentials
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  // If there's an error, return it
  if (error) {
    return { error: "Something went wrong!" };
  }

  // Revalidate the path to update the UI based on the new auth state
  revalidatePath("/", "layout");
  // Redirect the user to the homepage after successful login
  redirect("/");
}

// Function to sign up a new user with email and password
export async function signup(email: string, password: string) {
  // Initialize cookie store for session management
  const cookieStore = cookies();
  // Create a Supabase client instance
  const supabase = createClient(cookieStore);

  // Attempt to sign up with provided credentials
  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  // If there's an error, throw it to be caught by the caller
  if (error) {
    throw new Error("Something went wrong!");
  }

  // Revalidate the path to update the UI based on the new auth state
  revalidatePath("/", "layout");
}

// Function to log out the current user
export async function logout() {
  // Initialize cookie store for session management
  const cookieStore = cookies();
  // Create a Supabase client instance
  const supabase = createClient(cookieStore);

  // Sign out the current user
  await supabase.auth.signOut();

  // Revalidate the path to update the UI based on the new auth state
  revalidatePath("/", "layout");
  // Redirect the user to the homepage after successful logout
  redirect("/");
}