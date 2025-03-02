"use client";

import { SignOutButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomePage() {
    const { user, isLoaded } = useUser();
    const [isHydrated,setIsHydrated] = useState(false)
    const router = useRouter();

    useEffect(() => {
        if(!isHydrated){
            setIsHydrated(true)
        }
    },[isHydrated])

    useEffect(() => {
        if (isLoaded && !user) {
            router.push("/sign-in");
        }
    }, [isLoaded, user, router]);

    if (!isLoaded) {
        return <>Loading...</>;
    }

    if (!user) {
        return null;
    }

    return (
        <div className="h-full">
            <main className="items-center justify-center h-screen">
                <h1 className="text-3xl font-bold">Welcome, {user.firstName}!</h1>
                <p className="text-lg mt-2">You are successfully signed in.</p>
                <a href="/dashboard" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                    Go to Dashboard
                </a>
                <SignOutButton>Signout</SignOutButton>
            </main>
        </div>
    );
}