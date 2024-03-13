/*
** ****************************************************************************
** This file is part of the news section of the application.
** It handles the redirection to a specific news article upon component mount.
** ****************************************************************************
*/

// Indicate that this code should run on the client side
'use client'

// Import necessary hooks from React and Next.js
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Define the functional component for the page
export default function Page() {
  // Initialize the Next.js router hook to programmatically navigate between pages
  const router = useRouter();

  // Use the useEffect hook to perform side effects in the component
  useEffect(() => {
    // Use the router to navigate to a specific news article using its unique ID
    router.push('/news/3916e1de-38d4-4155-8a61-056e889b6d6c');
  }, [router]); // The effect depends on the router and runs when the router object changes

  // While redirecting, render nothing or a placeholder like a loading indicator
  return null;
}