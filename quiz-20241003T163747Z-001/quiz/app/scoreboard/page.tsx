"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./styles.css"
export default function Scoreboard() {
    const [score, setScore] = useState(0);
    const router = useRouter();

    useEffect(() => {
        // Get the score from the query parameter
        const queryScore = new URLSearchParams(window.location.search).get("score");
        setScore(Number(queryScore));
    }, []);

    return (
        <div className="scoreboard">
            <h1>Your Score</h1>
            <div className="score">{score} / 10</div>
            <button onClick={() => router.push("/")}>Restart Quiz</button>
        </div>
    );
}
