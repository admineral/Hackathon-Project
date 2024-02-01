// components/layout/navbar.tsx
"use client";

import Image from "next/legacy/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";

export default function NavBar({ session }: { session: Session | null }) {
  const signInModal = useSignInModal();
  const scrolled = useScroll(50);

  if (!signInModal) {
    // handle the case when useSignInModal returns null or undefined
    return null;
  }

  const { SignInModal, setShowSignInModal } = signInModal;

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full flex justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="krone_logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            ></Image>
            <p className="text-black">Kronews</p> 
          </Link>
          <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={() => setShowSignInModal(true)}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}