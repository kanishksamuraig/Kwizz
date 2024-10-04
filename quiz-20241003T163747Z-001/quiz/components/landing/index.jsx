"use client"
import React from "react";
import { useRouter } from "next/navigation";
import "./styles.css";

function LandingPage() {
  const router = useRouter();

  function handleClick(section) {
    // Navigate to the respective section
    if (section === "funGames") {
      router.push("/fun-games");
    } else if (section === "jeePmc") {
      router.push("/jee-pmc");
    } else if (section === "cseHypeTrain") {
      router.push("/cse-hype-train");
    }
  }

  return (
    <div className="LandingWrapper">
      <div className="center">
        <h1 className="landingTitle">Welcome to the Kwizz Hub</h1>
        <p className="landingSubtitle">Choose your quiz adventure below</p>

        <div className="quizSections">
          {/* Section 1: Fun and Games */}
          <div
            className="section funGames"
            onClick={() => handleClick("funGames")}
          >
            <h2>🎉 Fun and Games</h2>
            <p>Quizzes designed to challenge and entertain!</p>
          </div>

          {/* Section 2: JEE - PMC */}
          <div className="section jeePmc" onClick={() => handleClick("jeePmc")}>
            <h2>📚 JEE - PMC</h2>
            <p>Prepare for competitive exams with these tailored quizzes.</p>
          </div>

          {/* Section 3: CSE Hype Train */}
          <div
            className="section cseHypeTrain"
            onClick={() => handleClick("cseHypeTrain")}
          >
            <h2>💻 CSE Hype Train</h2>
            <p>Explore Computer Science concepts in an exciting way!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
