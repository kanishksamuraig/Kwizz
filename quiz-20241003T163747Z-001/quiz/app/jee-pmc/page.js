// "use client";
// import Header from "../../components/header/index";
// import "./styles.css";
// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function Question() {
//   const [questionData, setQuestionData] = useState(null);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [result, setResult] = useState("");
//   const [loading, setLoading] = useState(true);

//   const fetchRandomQuestion = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/getRandomQuestion");
//       setQuestionData(response.data);
//       setSelectedAnswer(null);
//       setResult("");
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching random question:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchRandomQuestion();
//   }, []);

//   const handleSubmit = () => {
//     if (!selectedAnswer) {
//       setResult("Please select an answer!");
//       return;
//     }
//     if (selectedAnswer === questionData.correct) {
//       setResult("Correct!");
//     } else {
//       setResult("False!");
//     }

//     setTimeout(() => {
//       fetchRandomQuestion();
//     }, 2000);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!questionData) {
//     return <div>Error loading question</div>;
//   }

//   return (
//     <div className="bodyQuestion">
      
//       <div className="questionBar">
//         <h1 className="Question">{questionData.Question}</h1>
//       </div>
//       <div className="AnswersWrapper">
//         <div className="answerOptionsContainer">
//           <div className="answerRow">
//             <div
//               className={`AnswerOption ${selectedAnswer === "i" ? "selected" : ""}`}
//               onClick={() => setSelectedAnswer("i")}
//             >
//               {questionData.i}
//             </div>
//             <div
//               className={`AnswerOption ${selectedAnswer === "ii" ? "selected" : ""}`}
//               onClick={() => setSelectedAnswer("ii")}
//             >
//               {questionData.ii}
//             </div>
//           </div>
//           <div className="answerRow">
//             <div
//               className={`AnswerOption ${selectedAnswer === "iii" ? "selected" : ""}`}
//               onClick={() => setSelectedAnswer("iii")}
//             >
//               {questionData.iii}
//             </div>
//             <div
//               className={`AnswerOption ${selectedAnswer === "iv" ? "selected" : ""}`}
//               onClick={() => setSelectedAnswer("iv")}
//             >
//               {questionData.iv}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="submitButtonContainer">
//         <button className="submitButton" onClick={handleSubmit}>
//           Submit
//         </button>
//       </div>
//       {result && <div className="resultMessage">{result}</div>}
//     </div>
//   );
// }

// SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS


// "use client";
// import Header from "../../components/header/index";
// import "./styles.css";
// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function Question() {
//     const [question, setQuestion] = useState({});
//     const [selectedAnswer, setSelectedAnswer] = useState("");
//     const [message, setMessage] = useState("");
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         fetchRandomQuestion();
//     }, []);

//     const fetchRandomQuestion = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/getRandomQuestion'); 
//             setQuestion(response.data);
//             setMessage("");
//             setSelectedAnswer("");
//             setIsVisible(false);
//         } catch (error) {
//             console.error("Error fetching question:", error);
//         }
//     };

//     const handleAnswer = (option) => {
//         setSelectedAnswer(option);
//         if (option === question.correct) {
//             setMessage("CORRECT");
//         } else {
//             setMessage("WRONG ! Correct Answer " + question[question['correct']]);
//         }
//         setIsVisible(true);
//         setTimeout(() => {
//             setIsVisible(false);
//             fetchRandomQuestion(); 
//         }, 3000); 
//     };

//     return (
//         <div>
            
//             <div className="questionBar">
//                 <h1 className="Question">{question.Question}</h1>
//             </div>
//             <div className="AnswersWrapper">
//                 <div className="answerOptionsContainer">
//                     <div className="AnswerOption" onClick={() => handleAnswer('i')}>
//                         {question.i}
//                     </div>
//                     <div className="AnswerOption" onClick={() => handleAnswer('ii')}>
//                         {question.ii}
//                     </div>
//                     <div className="AnswerOption" onClick={() => handleAnswer('iii')}>
//                         {question.iii}
//                     </div>
//                     <div className="AnswerOption" onClick={() => handleAnswer('iv')}>
//                         {question.iv}
//                     </div>
//                 </div>
//             </div>

//             {isVisible && (
//                 <div className={`overlay ${message.toLowerCase()}`}>
//                     <h1>{message}</h1>
//                 </div>
//             )}
//         </div>
//     );
// }

// "use client";
// import Header from "../../components/header/index";
// import "./styles.css";
// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function Question() {
//     const [question, setQuestion] = useState({});
//     const [selectedAnswer, setSelectedAnswer] = useState("");
//     const [message, setMessage] = useState("");
//     const [isVisible, setIsVisible] = useState(false);
//     const [questionsAnswered, setQuestionsAnswered] = useState(0); // Track the number of questions answered

//     useEffect(() => {
//         fetchRandomQuestion();
//     }, []);

//     const fetchRandomQuestion = async () => {
//         try {
//             const response = await axios.get("http://localhost:5000/getRandomQuestion");
//             setQuestion(response.data);
//             setMessage("");
//             setSelectedAnswer("");
//             setIsVisible(false);
//         } catch (error) {
//             console.error("Error fetching question:", error);
//         }
//     };

//     const handleAnswer = (option) => {
//         setSelectedAnswer(option);
//         if (option === question.correct) {
//             setMessage("CORRECT");
//         } else {
//             setMessage("WRONG! Correct Answer: " + question[question["correct"]]);
//         }

//         setIsVisible(true);
//         setTimeout(() => {
//             setIsVisible(false);
//             fetchRandomQuestion();
//             setQuestionsAnswered((prev) => prev + 1); // Increment questions answered count
//         }, 3000);
//     };

//     return (
//         <div>
            
//             <div className="questionBar">
//                 <h1 className="Question">{question.Question}</h1>
//             </div>
            
//             {/* Show the number of questions answered out of 10 */}
//             <div className="questionCount">
//                 <h2>Questions Answered: {questionsAnswered} / 10</h2>
//             </div>

//             <div className="AnswersWrapper">
//                 <div className="answerOptionsContainer">
//                     <div className="AnswerOption" onClick={() => handleAnswer('i')}>
//                         {question.i}
//                     </div>
//                     <div className="AnswerOption" onClick={() => handleAnswer('ii')}>
//                         {question.ii}
//                     </div>
//                     <div className="AnswerOption" onClick={() => handleAnswer('iii')}>
//                         {question.iii}
//                     </div>
//                     <div className="AnswerOption" onClick={() => handleAnswer('iv')}>
//                         {question.iv}
//                     </div>
//                 </div>
//             </div>

//             {isVisible && (
//                 <div className={`overlay ${message.toLowerCase()}`}>
//                     <h1>{message}</h1>
//                 </div>
//             )}
//         </div>
//     );
// }


"use client";
import Header from "../../components/header/index";
import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // Import the useRouter hook

export default function Question() {
    const [question, setQuestion] = useState({});
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [message, setMessage] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [questionsAnswered, setQuestionsAnswered] = useState(0); // Track the number of questions answered
    const [score, setScore] = useState(0); // Track the user's score
    const router = useRouter(); // Initialize Next.js router

    useEffect(() => {
        fetchRandomQuestion();
    }, []);

    const fetchRandomQuestion = async () => {
        try {
            const response = await axios.get("http://localhost:5000/getRandomJEEQuestion");
            setQuestion(response.data);
            setMessage("");
            setSelectedAnswer("");
            setIsVisible(false);
        } catch (error) {
            console.error("Error fetching question:", error);
        }
    };

    const handleAnswer = (option) => {
        setSelectedAnswer(option);

        if (option === question.correct) {
            setMessage("RIGHT");
            setScore((prevScore) => prevScore + 1); // Increment the score if the answer is correct
        } else {
            setMessage("WRONG! Correct Answer: " + question[question["correct"]]);
            // setMessage("WRONG")
        }

        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
            setQuestionsAnswered((prev) => prev + 1); // Increment questions answered count

            // After 10 questions, navigate to the scoreboard
            if (questionsAnswered + 1 === 10) {
                router.push(`/scoreboard?score=${score + (option === question.correct ? 1 : 0)}`); // Navigate to scoreboard with score
            } else {
                fetchRandomQuestion();
            }
        }, 2000);
    };

    return (
        <div>
           
            <div className="questionBar">
                <h1 className="Question">{question.Question}</h1>
            </div>
            
            {/* Show the number of questions answered out of 10 */}
            <div className="questionCount">
                <h2>Questions Answered: {questionsAnswered} / 10</h2>
            </div>

            <div className="AnswersWrapper">
                <div className="answerOptionsContainer">
                    <div className="AnswerOption" onClick={() => handleAnswer('i')}>
                        {question.i}
                    </div>
                    <div className="AnswerOption" onClick={() => handleAnswer('ii')}>
                        {question.ii}
                    </div>
                    <div className="AnswerOption" onClick={() => handleAnswer('iii')}>
                        {question.iii}
                    </div>
                    <div className="AnswerOption" onClick={() => handleAnswer('iv')}>
                        {question.iv}
                    </div>
                </div>
            </div>

            {isVisible && (
                
                <div className={`overlay ${message.toLowerCase().slice(0,6)} `}>
                    <h1>{message}</h1>
                </div>
            )}
        </div>
    );
}
