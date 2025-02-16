"use client";
import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  const { user, isSignedIn } = useUser();
  
  return (
    <div>
      <main>
        {isSignedIn ? (
          <>
            <h1>Welcome, {user?.fullName}</h1>
            {user?.imageUrl && (
              <Image
                src={user.imageUrl}
                alt="Profile"
                width={50}
                height={50}
                className="rounded-full"
              />
            )}
            <SignOutButton />
          </>
        ) : (
          <SignInButton />
        )}
      </main>
    </div>
  );
}
