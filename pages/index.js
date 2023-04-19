/* eslint-disable @next/next/no-img-element */
import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";
import Layout from "@/components/Layout";

export default function Home() {
  const { data: session } = useSession();
  if (!session) return;
  return (
    <Layout>
      <div className="text-blue-950 flex justify-between">
        <h1>
          {" "}
          Hello , <b>{session?.user?.name}</b>
        </h1>

        <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
          {" "}
          <img src={session?.user?.image} alt="d" className="w-6 h-6" />
          <span className="px-2 font-bold"> {session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}
