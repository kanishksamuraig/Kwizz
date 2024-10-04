"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./stylesc.css"; 

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Placeholder for authentication logic
        if (email === "fstival@gmail.com" && password === "foss") {
            router.push("/"); // Redirect to the dashboard or home page after successful sign in
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="signInWrapper">
            <div className="signInContainer">
                <h2 className="signInTitle">Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="inputContainer">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit" className="signInButton">Sign In</button>
                </form>
            </div>
        </div>
    );
}
