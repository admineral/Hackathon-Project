// app/Session.tsx
'use client'
import { useSession } from "next-auth/react";

export default function Session({ children }) {
  const { data: session } = useSession();

  // Pass the session data to children components
  return React.cloneElement(children, { session });
}

// atest 