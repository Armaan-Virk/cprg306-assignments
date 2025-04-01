"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
import { useState } from "react";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [error, setError] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleSignIn = async () => {
    if (isLoggingIn) return; // Prevent multiple clicks

    try {
      setIsLoggingIn(true);
      await gitHubSignIn();
      setError(null);
    } catch (err) {
      if (err.code === "auth/popup-closed-by-user") {
        setError("Login popup was closed.");
      } else if (err.code === "auth/cancelled-popup-request") {
        setError("Login already in progress...");
      } else {
        setError("Login failed. Please try again.");
        console.error("Login error:", err);
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <main className="p-6 font-sans">
      {!user ? (
        <div>
          <h1 className="text-2xl mb-4">Welcome to the Shopping List App</h1>
          <button
            onClick={handleSignIn}
            className="px-4 py-2 bg-black text-white rounded"
            disabled={isLoggingIn}
          >
            {isLoggingIn ? "Logging in..." : "Login with GitHub"}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      ) : (
        <div>
          <h1 className="text-2xl mb-2">Welcome, {user.displayName}</h1>
          <p className="mb-4">{user.email}</p>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-gray-800 text-white rounded mb-4"
          >
            Log Out
          </button>
          <br />
          <Link
            href="/week-10/shopping-list"
            className="text-blue-600 underline"
          >
            Go to Shopping List
          </Link>
        </div>
      )}
    </main>
  );
}
