"use client"
import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import "./styles.css";

function Header() {
    const router = useRouter(); // Initialize the router

    const handleSignIn = () => {
        router.push("/signin"); // Navigate to /signin
    };

    const handleSignUp = () => {
        router.push("/signup"); // Navigate to /signup
    };

    return (
        <div className="HeaderWrapper">
            <div className="Kwizz">
                <h1>Kwizz</h1>
            </div>
            <div>
                <button className="Sign" onClick={handleSignIn}>
                    Sign In
                </button>
                <button className="Sign" onClick={handleSignUp}>
                    Sign Up
                </button>
            </div>
        </div>
    );
}

export default Header;
