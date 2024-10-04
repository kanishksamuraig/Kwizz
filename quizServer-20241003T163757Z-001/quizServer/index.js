import express  from "express";
import * as fs from "fs"
import cors from "cors"


const app = express();
const PORT = 5000

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

let Data= [
    {
        "topic": "Data structure and Algorithms",
        "Question": "Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",
        "i": "Insertion Sort",
        "ii": "Quick Sort",
        "iii": "Heap Sort",
        "iv": "Merge Sort",
        "correct": "iv"
    },
    
   
    {
        "topic": "Operating System",
        "Question": "What is an operating system?",
        "i": "interface between the hardware and application programs",
        "ii": "collection of programs that manages hardware resources",
        "iii": "system service provider to the application programs",
        "iv": "all of the mentioned",
        "correct": "iv"
    },
    {
        "topic": "Operating System",
        "Question": "What is an operating system?",
        "i": "interface between the hardware and application programs",
        "ii": "collection of programs that manages hardware resources",
        "iii": "system service provider to the application programs",
        "iv": "all of the mentioned",
        "correct": "iv"
    },
    {
        "topic": "Data Structures and Algorithms",
        "Question": "Which data structure is used for implementing recursive algorithms?",
        "i": "Stack",
        "ii": "Queue",
        "iii": "Linked List",
        "iv": "Tree",
        "correct": "i"
    },
    {
        "topic": "Database Management Systems",
        "Question": "What is the purpose of a foreign key in a relational database?",
        "i": "To uniquely identify each record in a table",
        "ii": "To establish a relationship between two tables",
        "iii": "To enforce referential integrity",
        "iv": "Both ii and iii",
        "correct": "iv"
    },
    {
        "topic": "Operating Systems",
        "Question": "In process scheduling, which algorithm selects the process with the shortest expected processing time?",
        "i": "First-Come, First-Served (FCFS)",
        "ii": "Shortest Job First (SJF)",
        "iii": "Round Robin (RR)",
        "iv": "Priority Scheduling",
        "correct": "ii"
    },
    {
        "topic": "Networking",
        "Question": "Which protocol is used to resolve the IP address from a given MAC address in a local network?",
        "i": "DNS",
        "ii": "ARP",
        "iii": "TCP",
        "iv": "UDP",
        "correct": "ii"
    },
    {
        "topic": "Computer Architecture",
        "Question": "In computer architecture, what is the primary function of the Control Unit (CU)?",
        "i": "Execute arithmetic and logic operations",
        "ii": "Store data and instructions",
        "iii": "Direct the operation of the processor",
        "iv": "Provide power to the system",
        "correct": "iii"
    },
    {
        "topic": "Artificial Intelligence",
        "Question": "Which algorithm is commonly used for training supervised learning models?",
        "i": "Backpropagation",
        "ii": "Breadth-First Search",
        "iii": "Depth-First Search",
        "iv": "Minimax",
        "correct": "i"
    },
    {
        "topic": "Software Engineering",
        "Question": "Which software development model is also known as the ‘linear-sequential life cycle model’?",
        "i": "Agile",
        "ii": "Waterfall",
        "iii": "Spiral",
        "iv": "V-Model",
        "correct": "ii"
    },
    {
        "topic": "Cryptography",
        "Question": "Which encryption algorithm is considered symmetric encryption?",
        "i": "RSA",
        "ii": "AES",
        "iii": "DSA",
        "iv": "ElGamal",
        "correct": "ii"
    },
    {
        "topic": "Data Structures and Algorithms",
        "Question": "What is the time complexity of searching an element in a balanced binary search tree (BST)?",
        "i": "O(n)",
        "ii": "O(log n)",
        "iii": "O(n log n)",
        "iv": "O(1)",
        "correct": "ii"
    },
    {
        "topic": "Networking",
        "Question": "What is the maximum length of an IPv4 address?",
        "i": "32 bits",
        "ii": "64 bits",
        "iii": "128 bits",
        "iv": "16 bits",
        "correct": "i"
    },
    {
        "topic": "Database Management Systems",
        "Question": "Which normal form is considered optimal for most database designs?",
        "i": "1NF",
        "ii": "2NF",
        "iii": "3NF",
        "iv": "BCNF",
        "correct": "iii"
    },
    {
        "topic": "Operating Systems",
        "Question": "What is a ‘deadlock’ in operating systems?",
        "i": "A situation where two processes wait for each other indefinitely",
        "ii": "A process that terminates unexpectedly",
        "iii": "A process running in an infinite loop",
        "iv": "A communication failure between hardware devices",
        "correct": "i"
    },
    {
        "topic": "Computer Architecture",
        "Question": "Which memory technology is non-volatile and stores data even when the power is turned off?",
        "i": "RAM",
        "ii": "Cache",
        "iii": "ROM",
        "iv": "SRAM",
        "correct": "iii"
    },
    {
        "topic": "Data Structures and Algorithms",
        "Question": "Which of the following algorithms is used for solving the shortest path problem in graphs?",
        "i": "Dijkstra's Algorithm",
        "ii": "Floyd-Warshall Algorithm",
        "iii": "Bellman-Ford Algorithm",
        "iv": "All of the mentioned",
        "correct": "iv"
    },
    {
        "topic": "Artificial Intelligence",
        "Question": "Which of the following is an unsupervised learning algorithm?",
        "i": "Linear Regression",
        "ii": "K-means Clustering",
        "iii": "Decision Tree",
        "iv": "Support Vector Machine (SVM)",
        "correct": "ii"
    },
    {
        "topic": "Artificial Intelligence",
        "Question": "Which search algorithm in AI is used to find the shortest path in a weighted graph?",
        "i": "Depth-First Search",
        "ii": "Breadth-First Search",
        "iii": "A* Search",
        "iv": "Greedy Search",
        "correct": "iii"
    },
    {
        "topic": "Object-Oriented Programming",
        "Question": "Which of the following is not a principle of Object-Oriented Programming?",
        "i": "Encapsulation",
        "ii": "Inheritance",
        "iii": "Abstraction",
        "iv": "Recursion",
        "correct": "iv"
    },
    {
        "topic": "Object-Oriented Programming",
        "Question": "Which of the following concepts is achieved by function overloading or method overloading?",
        "i": "Encapsulation",
        "ii": "Polymorphism",
        "iii": "Abstraction",
        "iv": "Inheritance",
        "correct": "ii"
    },
    {
        "topic": "Object-Oriented Programming",
        "Question": "What is a constructor in OOP?",
        "i": "A special function used to initialize objects",
        "ii": "A method that returns the object of the class",
        "iii": "A function that is used to destroy objects",
        "iv": "A method used for creating multiple objects",
        "correct": "i"
    },
    {
        "topic": "Object-Oriented Programming",
        "Question": "Which feature of OOP is used to bind the data and the functions that manipulate the data together?",
        "i": "Abstraction",
        "ii": "Encapsulation",
        "iii": "Inheritance",
        "iv": "Polymorphism",
        "correct": "ii"
    },
    {
        "topic": "Artificial Intelligence",
        "Question": "Which of the following is a reinforcement learning algorithm?",
        "i": "Q-Learning",
        "ii": "Linear Regression",
        "iii": "SVM",
        "iv": "K-Nearest Neighbors",
        "correct": "i"
    },
    {
        "topic": "Database Management Systems",
        "Question": "Which type of SQL query is used to modify existing data?",
        "i": "SELECT",
        "ii": "INSERT",
        "iii": "UPDATE",
        "iv": "DELETE",
        "correct": "iii"
    },
    {
        "topic": "Networking",
        "Question": "Which layer of the OSI model is responsible for end-to-end communication and error handling?",
        "i": "Transport Layer",
        "ii": "Network Layer",
        "iii": "Data Link Layer",
        "iv": "Session Layer",
        "correct": "i"
    },
    {
        "topic": "Operating Systems",
        "Question": "Which type of scheduling algorithm is used in real-time operating systems?",
        "i": "Round Robin",
        "ii": "Priority Scheduling",
        "iii": "Multilevel Queue Scheduling",
        "iv": "Earliest Deadline First (EDF)",
        "correct": "iv"
    },
    {
        "topic": "Object-Oriented Programming",
        "Question": "Which of the following is true about inheritance in OOP?",
        "i": "Inheritance allows a class to use methods and properties of another class",
        "ii": "Inheritance is not supported in C++",
        "iii": "Inheritance is used to override private members",
        "iv": "Inheritance prevents code reusability",
        "correct": "i"
    },
    {
        "topic": "Data Structures and Algorithms",
        "Question": "Which of the following is a greedy algorithm?",
        "i": "Prim's Algorithm",
        "ii": "Kruskal's Algorithm",
        "iii": "Huffman Encoding",
        "iv": "All of the mentioned",
        "correct": "iv"
    },
    {
        "topic": "Software Engineering",
        "Question": "In which SDLC phase is the feasibility of the project analyzed?",
        "i": "Requirement Analysis",
        "ii": "Design",
        "iii": "Feasibility Study",
        "iv": "Implementation",
        "correct": "iii"
    }
];



let userData = [
    {
        id : 1,
        name : "Sivasu",
        password : "tts@0208",
        mail : "sivasubramani.kp@gmail.com",
        isSignedIn : false,
        
        
    }
]


app.get("/getQuestion/:id", (req,res) => {
    res.send(req.params.id);
});


app.post("/signUp", (req,res) => {
    const userName = req.body.name;
    const password = req.body.password;

    let isThisUserThereAlready;
    userData.forEach( (user) => {
        if (user.name === userName) isThisUserThereAlready = true;
    })
    if (!isThisUserThereAlready){
    const newUser = {
        id : userData.length + 1,
        name : userName,
        password : password,
        QuestionID : [],
        isSignedIn : true,
    


    }
    userData.push(newUser);
    res.send("created")

}else {
    res.send("exist")
}
    
});

app.get("/getQuestionsByTopic/:topic", (req, res) => {
    const topic = req.params.topic;

    // Filter questions by topic
    const questions = Data.filter(question => question.topic.toLowerCase() === topic.toLowerCase());

    if (questions.length > 0) {
        res.json(questions);
    } else {
        res.status(404).send("No questions found for this topic");
    }
});

app.get("/getRandomQuestion", (req, res) => {
    if (Data.length === 0) {
        return res.status(404).send("No questions available");
    }
    
    // Get a random question
    const randomIndex = Math.floor(Math.random() * Data.length);
    const randomQuestion = Data[randomIndex];
    
    res.json(randomQuestion);
});

// Assuming funQuestions and JEEQuestions are your arrays of questions
const funQuestions = [
    
    
    
    {
        "topic": "Tamil Movies",
        "Question": "Which Tamil film revolves around the concept of time travel but is cleverly masked as a thriller?",
        "i": "24",
        "ii": "Iru Mugan",
        "iii": "Thuppakki",
        "iv": "Maanagaram",
        "correct": "i"
    },
    {
        "topic": "Internet Memes",
        "Question": "What meme format is often used to portray someone getting unexpectedly caught off guard by a mundane situation?",
        "i": "Shocked Pikachu",
        "ii": "Surprised Cat",
        "iii": "Crying Wojak",
        "iv": "Distracted Boyfriend",
        "correct": "i"
    },
    {
        "topic": "Internet Memes",
        "Question": "Which 2021 meme involved a reaction image of a dog with a confused expression, often paired with ironic text?",
        "i": "Is This a Pigeon?",
        "ii": "Doge",
        "iii": "Confused Nick Young",
        "iv": "Why You Always Lying?",
        "correct": "iii"
    },
    {
        "topic": "Internet Memes",
        "Question": "Which internet meme features a character saying 'They did surgery on a grape' in a nonsensical context?",
        "i": "SpongeBob SquarePants",
        "ii": "Kevin Hart",
        "iii": "Shrek",
        "iv": "Kanye West",
        "correct": "i"
    },
    {
        "topic": "Internet Memes",
        "Question": "What meme, often used to convey existential dread, features a character looking pensive while sitting alone?",
        "i": "Ight Imma Head Out",
        "ii": "Sad Keanu",
        "iii": "Me Gusta",
        "iv": "Wojak",
        "correct": "ii"
    },
    {
        "topic": "Internet Memes",
        "Question": "Which meme, that became popular in 2019, features a cat and a woman yelling, typically used to represent absurd arguments?",
        "i": "Woman Yelling at a Cat",
        "ii": "Expanding Brain",
        "iii": "Change My Mind",
        "iv": "Two Buttons",
        "correct": "i"
    },
    {
        "topic": "Songs",
        "Question": "In which song does Billie Eilish express the theme of feeling like a 'bad guy' while showcasing a playful yet sinister vibe?",
        "i": "When the Party's Over",
        "ii": "Bad Guy",
        "iii": "You Should See Me in a Crown",
        "iv": "Bellyache",
        "correct": "ii"
    },
    
    {
        "topic": "Songs",
        "Question": "Which track by Olivia Rodrigo features a relatable narrative about the complexities of teenage emotions and heartbreak?",
        "i": "1 step forward, 3 steps back",
        "ii": "Brutal",
        "iii": "Good 4 U",
        "iv": "Deja Vu",
        "correct": "iii"
    },
    
    {
        "topic": "Songs",
        "Question": "And you'll be left in the dustUnless I stuck by ya You're the",
        "i": "Good Time",
        "ii": "Stay",
        "iii": "In My Feelings",
        "iv": "Sunflower",
        "correct": "iv"
    },
    {
        "topic": "Tamil Movies",
        "Question": "Which film is a satirical take on the Indian education system, featuring a character who rebels against societal norms?",
        "i": "Sethu",
        "ii": "Nanban",
        "iii": "Maanagaram",
        "iv": "Oru Kal Oru Kannadi",
        "correct": "ii"
    },
    
    {
        "topic": "Tamil Movies",
        "Question": "A proficient carrom player sets foot in the world of crime and joins forces with local gangsters to settle their feuds.",
        "i": "Thani Oruvan",
        "ii": "Vada Chennai",
        "iii": "Sathya",
        "iv": "Mugamoodi",
        "correct": "ii"
    },
    {
        "topic": "Internet Memes",
        "Question": "Which meme, popularized during the pandemic, depicts a character contemplating life choices while staring out a window?",
        "i": "Deep-Fried Memes",
        "ii": "Quarantine Spongebob",
        "iii": "Expanding Brain",
        "iv": "This is Fine",
        "correct": "ii"
    },
    {
        "topic": "Internet Memes",
        "Question": "Which meme references a character from *The Office* frequently used to depict someone getting overly excited?",
        "i": "Jim Halpert",
        "ii": "Michael Scott",
        "iii": "Stanley Hudson",
        "iv": "Dwight Schrute",
        "correct": "ii"
    },
    {
        "topic": "Internet Memes",
        "Question": "What meme, featuring a frog with various expressions, often depicts the feeling of contentment in absurd situations?",
        "i": "Pepe the Frog",
        "ii": "Kermit the Frog",
        "iii": "Surprised Pikachu",
        "iv": "SpongeBob SquarePants",
        "correct": "i"
    },
    {
        "topic": "Internet Memes",
        "Question": "Which meme involves a series of images showing a person confidently presenting a wrong answer?",
        "i": "Two Buttons",
        "ii": "Mocking SpongeBob",
        "iii": "Change My Mind",
        "iv": "Drake Hotline Bling",
        "correct": "i"
    },
    {
        "topic": "Internet Memes",
        "Question": "In which state Baby gronk rizzed up Livvy Dunne",
        "i": "Ohio",
        "ii": "California",
        "iii": "Detroit",
        "iv": "Texas",
        "correct": "i"
    },
    {
        "topic": "Internet Memes",
        "Question": "What is the most played tamil video On Youtube",
        "i": "Rowdy Baby",
        "ii": "Why This Kolaveri di",
        "iii": "Urula Kilangu Chellakutty",
        "iv": "Kutty Story",
        "correct": "iii"
    },
    {
        "topic": "Space",
        "Question": "Which planet in our solar system has the most moons?",
        "i": "Earth",
        "ii": "Mars",
        "iii": "Jupiter",
        "iv": "Saturn",
        "correct": "iii"
    },
    {
        "topic": "Technology",
        "Question": "What was the name of the first computer virus?",
        "i": "ILOVEYOU",
        "ii": "Creeper",
        "iii": "Melissa",
        "iv": "Stuxnet",
        "correct": "ii"
    },
    {
        "topic": "History",
        "Question": "Who was the first President of the United States?",
        "i": "Abraham Lincoln",
        "ii": "John Adams",
        "iii": "Thomas Jefferson",
        "iv": "George Washington",
        "correct": "iv"
    },
    {
        "topic": "Movies",
        "Question": "In *The Matrix*, which pill does Neo take?",
        "i": "Blue",
        "ii": "Red",
        "iii": "Green",
        "iv": "Yellow",
        "correct": "ii"
    },
    {
        "topic": "Literature",
        "Question": "Who wrote the novel *1984*?",
        "i": "George Orwell",
        "ii": "Aldous Huxley",
        "iii": "Jules Verne",
        "iv": "Mark Twain",
        "correct": "i"
    },
    {
        "topic": "Sports",
        "Question": "Which country has won the most FIFA World Cup titles?",
        "i": "Argentina",
        "ii": "Germany",
        "iii": "Brazil",
        "iv": "Italy",
        "correct": "iii"
    },
    {
        "topic": "Music",
        "Question": "Which artist is known as the 'King of Pop'?",
        "i": "Elvis Presley",
        "ii": "Freddie Mercury",
        "iii": "Michael Jackson",
        "iv": "Prince",
        "correct": "iii"
    },
    {
        "topic": "Science",
        "Question": "What is the chemical symbol for gold?",
        "i": "Ag",
        "ii": "Au",
        "iii": "Pb",
        "iv": "Fe",
        "correct": "ii"
    },
    {
        "topic": "Geography",
        "Question": "Which country is the largest by land area?",
        "i": "Canada",
        "ii": "China",
        "iii": "Russia",
        "iv": "United States",
        "correct": "iii"
    },
    {
        "topic": "Pop Culture",
        "Question": "Which social media platform is known for the viral trend 'Renegade' dance?",
        "i": "Instagram",
        "ii": "Snapchat",
        "iii": "TikTok",
        "iv": "Facebook",
        "correct": "iii"
    }

]


const JEEQuestions = [
    {
        "topic": "Physics",
        "Question": "What is the value of Planck's constant?",
        "i": "6.626 × 10^-34 J·s",
        "ii": "3.14159",
        "iii": "9.81 m/s²",
        "iv": "1.602 × 10^-19 C",
        "correct": "i"
    },
    {
        "topic": "Physics",
        "Question": "In a double-slit experiment, what determines the spacing of the interference pattern?",
        "i": "Wavelength of light",
        "ii": "Distance between slits",
        "iii": "Both a and b",
        "iv": "Thickness of slits",
        "correct": "iii"
    },
    {
        "topic": "Physics",
        "Question": "Which of the following particles has the least mass?",
        "i": "Neutron",
        "ii": "Proton",
        "iii": "Electron",
        "iv": "Photon",
        "correct": "iii"
    },
    {
        "topic": "Physics",
        "Question": "What is the principle of conservation of energy?",
        "i": "Energy cannot be created or destroyed",
        "ii": "Energy can only be converted",
        "iii": "Energy can be lost in friction",
        "iv": "Both a and b",
        "correct": "iv"
    },
    {
        "topic": "Physics",
        "Question": "What is the Schwarzschild radius associated with a black hole?",
        "i": "The radius at which time stops",
        "ii": "The radius at which light cannot escape",
        "iii": "The distance at which matter becomes unstable",
        "iv": "The distance at which gravitational forces equalize",
        "correct": "ii"
    },
    {
        "topic": "Chemistry",
        "Question": "What is the enthalpy change for the reaction of hydrogen and oxygen to form water?",
        "i": "Zero",
        "ii": "-285.8 kJ/mol",
        "iii": "+285.8 kJ/mol",
        "iv": "-57.2 kJ/mol",
        "correct": "ii"
    },
    {
        "topic": "Chemistry",
        "Question": "What is the principal quantum number of an electron in a 4p orbital?",
        "i": "4",
        "ii": "3",
        "iii": "2",
        "iv": "1",
        "correct": "i"
    },
    {
        "topic": "Chemistry",
        "Question": "Which of the following is the strongest acid?",
        "i": "Hydrochloric acid (HCl)",
        "ii": "Sulfuric acid (H2SO4)",
        "iii": "Nitric acid (HNO3)",
        "iv": "Hydrobromic acid (HBr)",
        "correct": "ii"
    },
    {
        "topic": "Chemistry",
        "Question": "What is the main product of the electrolysis of water?",
        "i": "Ozone",
        "ii": "Hydrogen and oxygen gases",
        "iii": "Hydrogen peroxide",
        "iv": "Hydrochloric acid",
        "correct": "ii"
    },
    {
        "topic": "Chemistry",
        "Question": "Which of the following has the highest electronegativity?",
        "i": "Fluorine",
        "ii": "Oxygen",
        "iii": "Chlorine",
        "iv": "Nitrogen",
        "correct": "i"
    },
    {
        "topic": "Mathematics",
        "Question": "What is the Laplace transform of the function f(t) = e^(-2t)?",
        "i": "1/(s + 2)",
        "ii": "1/(s - 2)",
        "iii": "2/(s + 2)",
        "iv": "1/(2s)",
        "correct": "i"
    },
    {
        "topic": "Mathematics",
        "Question": "If a function f(x) is defined as f(x) = 3x^3 - 5x^2 + 2, what is f'(x)?",
        "i": "9x^2 - 10x",
        "ii": "6x^2 - 5",
        "iii": "6x^2 + 2",
        "iv": "9x^2 - 5",
        "correct": "i"
    },
    {
        "topic": "Mathematics",
        "Question": "What is the convergence condition for a geometric series?",
        "i": "r < 0",
        "ii": "r = 1",
        "iii": "r < 1",
        "iv": "r > 1",
        "correct": "iii"
    },
    {
        "topic": "Mathematics",
        "Question": "Which of the following equations represents a hyperbola?",
        "i": "x^2/a^2 - y^2/b^2 = 1",
        "ii": "y = mx + c",
        "iii": "x^2 + y^2 = r^2",
        "iv": "x^2/a^2 + y^2/b^2 = 1",
        "correct": "i"
    },
    {
        "topic": "Mathematics",
        "Question": "What is the value of the determinant of the matrix [[1, 2], [3, 4]]?",
        "i": "-10",
        "ii": "-2",
        "iii": "2",
        "iv": "10",
        "correct": "ii"
    },
    {
        "topic": "Mathematics",
        "Question": "What is the value of the integral ∫(x^2 + 2x + 1) dx?",
        "i": "(1/3)x^3 + x^2 + x + C",
        "ii": "(1/3)x^3 + 2x + C",
        "iii": "(1/3)x^3 + 2x + x + C",
        "iv": "2x + C",
        "correct": "i"
    },
    {
        "topic": "Mathematics",
        "Question": "If the roots of the equation ax^2 + bx + c = 0 are real and equal, what is the condition on the discriminant?",
        "i": "D < 0",
        "ii": "D = 0",
        "iii": "D > 0",
        "iv": "D ≤ 0",
        "correct": "ii"
    },
    {
        "topic": "Mathematics",
        "Question": "What is the area of a triangle with vertices at (0,0), (4,0), and (0,3)?",
        "i": "6",
        "ii": "12",
        "iii": "24",
        "iv": "8",
        "correct": "i"
    },
    {
        "topic": "Mathematics",
        "Question": "What is the sum of the interior angles of a pentagon?",
        "i": "540°",
        "ii": "360°",
        "iii": "720°",
        "iv": "180°",
        "correct": "i"
    },
    {
        "topic": "Mathematics",
        "Question": "What is the principal value of the complex logarithm log(-1)?",
        "i": "0",
        "ii": "π",
        "iii": "-π",
        "iv": "2π",
        "correct": "ii"
    },
    {
        "topic": "Mathematics",
        "Question": "What is the Fourier series expansion of a square wave?",
        "i": "Only sine terms",
        "ii": "Only cosine terms",
        "iii": "Both sine and cosine terms",
        "iv": "Constant term only",
        "correct": "i"
    }
]

// Helper function to get a random item from an array
// function getRandomQuestion(questionsArray) {
//     const randomIndex = Math.floor(Math.random() * questionsArray.length);
//     return questionsArray[randomIndex];
// }

// // API endpoint to get a random Fun question
// app.get("/getRandomFunQuestion", (req, res) => {
//     if (funQuestions.length > 0) {
//         const randomFunQuestion = getRandomQuestion(funQuestions); // Get random fun question
//         res.json(randomFunQuestion); // Return the random question
//     } else {
//         res.status(404).send("No fun questions available");
//     }
// });

// // API endpoint to get a random JEE question
// app.get("/getRandomJEEQuestion", (req, res) => {
//     if (JEEQuestions.length > 0) {
//         const randomJEEQuestion = getRandomQuestion(JEEQuestions); // Get random JEE question
//         res.json(randomJEEQuestion); // Return the random question
//     } else {
//         res.status(404).send("No JEE questions available");
//     }
// });

let usedFunQuestions = [];
let usedJEEQuestions = [];

// Helper function to get a random question from the list
function getRandomQuestion(questions, usedQuestions) {
    const availableQuestions = questions.filter(q => !usedQuestions.includes(q));
    
    if (availableQuestions.length === 0) {
        // If no available questions left, reset the used questions
        usedQuestions.length = 0; // Clear used questions
        return getRandomQuestion(questions, usedQuestions); // Try again
    }
    
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const selectedQuestion = availableQuestions[randomIndex];
    usedQuestions.push(selectedQuestion); // Add to used questions
    return selectedQuestion;
}

// API endpoint to get a random fun question
app.get("/getRandomFunQuestion", (req, res) => {
    if (funQuestions.length > 0) {
        const randomFunQuestion = getRandomQuestion(funQuestions, usedFunQuestions);
        res.json(randomFunQuestion);
    } else {
        res.status(404).send("No fun questions available");
    }
});

// API endpoint to get a random JEE question
app.get("/getRandomJEEQuestion", (req, res) => {
    if (JEEQuestions.length > 0) {
        const randomJEEQuestion = getRandomQuestion(JEEQuestions, usedJEEQuestions);
        res.json(randomJEEQuestion);
    } else {
        res.status(404).send("No JEE questions available");
    }
});

app.post("/signIn", (req,res) => {
    const userName = req.body.name;
    const password = req.body.password;
    
    let isPasswordValid = false;
    userData.forEach((user) => {
        if ( user.name == userName ) {
            if ( user.password == password) {
                isPasswordValid = true;
            }
        }
    })
    if ( isPasswordValid ) {
        res.send(true);

    } else {
        res.send(false)
    }

});
app.listen(PORT, () => {
    console.log("Listening On Port 5000")
})