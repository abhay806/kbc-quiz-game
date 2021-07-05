import { useEffect, useMemo, useState } from "react";
import "./app.css"
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";


function App() {

  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "With Which of these cards would you associate the phrase 'Aam Aadmi ka Adhikaar'?",
      answers: [
        {
          text: "PAN Card",
          correct: false,
        },
        {
          text: "Voter ID Card",
          correct: false,
        },
        {
          text: "AADHAR Card",
          correct: true,
        },
        {
          text: "Ration Card",
          correct: false,
        },
      ],
    },
    
    {
      id: 5,
      question: "In the Ramayana, Which demon impersonated Rama's voice, screaming, 'Lakshman! Help me'?",
      answers: [
        {
          text: "Surpanakha",
          correct: false,
        },
        {
          text: "Khara",
          correct: false,
        },
        {
          text: "Maricha",
          correct: true,
        },
        {
          text: "Dushana",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "In 1850, the first experimental electric telegraph line in India was set up between Calcutta and which place?",
      answers: [
        {
          text: "Diamond Harbour",
          correct: true,
        },
        {
          text: "Darjeeling",
          correct: false,
        },
        {
          text: "Murshidabad",
          correct: false,
        },
        {
          text: "Dhaka",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which of these persons has not walked on the Moon?",
      answers: [
        {
          text: "Charles Duke",
          correct: false,
        },
        {
          text: "James A Lovell",
          correct: true,
        },
        {
          text: "Alan Bean",
          correct: false,
        },
        {
          text: "Pete Conrad",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "Which team retained the ashes Trophy in 2013?",
      answers: [
        {
          text: "Australia",
          correct: false,
        },
        {
          text: "South Africa",
          correct: false,
        },
        {
          text: "West Indies",
          correct: false,
        },
        {
          text: "England",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "In 2013, where did the natural calamity known as Himalayan tsunami occur?",
      answers: [
        {
          text: "Uttrakhand",
          correct: true,
        },
        {
          text: "Arunachal Pradesh",
          correct: false,
        },
        {
          text: "Jammu and Kashmir",
          correct: false,
        },
        {
          text: "Sikkim",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "With Which of these states do Chhattisgarh, Jharkhand and Andhra Pradesh all share their borders?",
      answers: [
        {
          text: "Madhya Pradesh",
          correct: false,
        },
        {
          text: "Odisha",
          correct: true,
        },
        {
          text: "Bihar",
          correct: false,
        },
        {
          text: "Uttar Pradesh",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "The first world championship in what sport is planned to be held in 2017, though the game has been played since 1877?",
      answers: [
        {
          text: "Test Cricket",
          correct: true,
        },
        {
          text: "Rugby Union",
          correct: false,
        },
        {
          text: "Kabaddi",
          correct: false,
        },
        {
          text: "Carrom",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which is the largest living species of tortoise in the world, which may weigh about 400 kg?",
      answers: [
        {
          text: "Sulcata Tortoise",
          correct: false,
        },
        {
          text: "Grenada Tortoise",
          correct: false,
        },
        {
          text: "Golden Greek Tortoise",
          correct: false,
        },
        {
          text: "Galapagos Tortoise",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "According to legend, which of these Rishis regained his youth by a celestial favor?",
      answers: [
        {
          text: "Agastya",
          correct: false,
        },
        {
          text: "Durvasa",
          correct: false,
        },
        {
          text: "Chyavana",
          correct: true,
        },
        {
          text: "Charaka",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Which of these is not a recommended mineral in the human diet?",
      answers: [
        {
          text: "Strontium",
          correct: true,
        },
        {
          text: "Potassium",
          correct: false,
        },
        {
          text: "Iron",
          correct: false,
        },
        {
          text: "Calcium",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(()=>
    [
      {id:1, amount:"$ 100"},
      {id:2, amount:"$ 200"},
      {id:3, amount:"$ 300"},
      {id:4, amount:"$ 500"},
      {id:5, amount:"$ 1000"},
      {id:6, amount:"$ 2000"},
      {id:7, amount:"$ 4000"},
      {id:8, amount:"$ 8000"},
      {id:9, amount:"$ 16000"},
      {id:10, amount:"$ 32000"},
      {id:11, amount:"$ 64000"},
      {id:12, amount:"$ 125000"},
      {id:13, amount:"$ 250000"},
      {id:14, amount:"$ 500000"},
      {id:15, amount:"$ 1000000"},
    ].reverse(),
  []); 

  useEffect(() => {
    questionNumber >1 && setEarned(moneyPyramid.find(m=> m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app"> 
      {username ? (
        <>
        <div className="main">
        {stop ? (
          <h1 className="endText">You earned: {earned}</h1> 
        ): (

        <>
        <div className="top">
          <div className="timer">
            <Timer setStop={setStop} questionNumber={questionNumber}/>
          </div>
        </div>
        <div className="bottom">
          <Trivia 
            data={data} 
            setStop={setStop}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
          />
        </div></>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
        {
          moneyPyramid.map(m=>(
            <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))
        }
        </ul>
      </div>
        </>
      ) : <Start setUsername={setUsername}/>}
      
    </div>
  );
}

export default App;
