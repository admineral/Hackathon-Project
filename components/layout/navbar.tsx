// components/layout/navbar.tsx
"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/legacy/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";

export default function NavBar({ session }: { session: Session | null }) {
  const signInModal = useSignInModal();
  const scrolled = useScroll(50);

  // Initialize theme based on client-side evaluation only
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = typeof window !== "undefined" ? localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== "undefined" ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
    console.log('Initial theme preference:', savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light'));
    return savedTheme ? savedTheme === 'dark' : prefersDark;
  });

  useEffect(() => {
    console.log('Applying theme class to body based on isDarkMode:', isDarkMode ? 'Dark' : 'Light');
    document.body.classList.toggle('dark-mode', isDarkMode);
    if (typeof window !== "undefined") {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }
  }, [isDarkMode]);

  if (!signInModal) {
    console.log('SignInModal not available, rendering null.');
    return null;
  }

  const { SignInModal, setShowSignInModal } = signInModal;

  return (
    <>
      <SignInModal />
      <div className={`fixed top-0 w-full flex justify-center ${scrolled ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl" : "bg-white/0"} z-30 transition-all`}>
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image src="/logo.png" alt="krone_logo" width="30" height="30" className="mr-2 rounded-sm" unoptimized />
            <p className="text-white">Kronews</p>
          </Link>
          <div className="flex items-center gap-4">
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button className="rounded-full border border-white bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black" onClick={() => setShowSignInModal(true)}>
                Sign In
              </button>
            )}
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
              <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .toggle-checkbox:checked {
          @apply: right-0 border-green-400;
          right: 0;
        }
        .toggle-checkbox:checked + .toggle-label {
          @apply: bg-green-400;
        }
        .toggle-label {
          @apply: block bg-gray-200 h-6 rounded-full;
        }
      `}</style>
    </>
  );
}