import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";

export default function Layout({ children }) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          Not signed in <br />
          <button
            onClick={() => signIn("google")}
            className="bg-white text-black font-bold rounded-lg p-2 px-4"
          >
            Sign in Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-blue-900 min-h-screen flex text-black">
      <Nav />
      <div className="flex-grow bg-white mt-2 mr-2 mb-2 rounded-lg p-3 ">
        {children}
      </div>
    </div>
  );
}
