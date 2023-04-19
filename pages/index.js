import Google from "next-auth/providers/google";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
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
          </button>{" "}
        </div>
      </div>
    );
  }
  return (
    <div className="bg-blue min-h-full">
      <div>logged in {session.user.email}</div>
    </div>
  );
}
