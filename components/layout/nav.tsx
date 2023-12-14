// components/layout/nav.tsx
import Navbar from "./navbar";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../app/auth/auth-config";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  return <Navbar session={session} />;
}