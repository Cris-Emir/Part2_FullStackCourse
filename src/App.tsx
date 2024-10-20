import { useState } from "react";
import Statistics from "./components/Statistics";

type ButtonProps = {
  handleClick: () => void;
  text: string;
};

const Button = ({ handleClick, text }: ButtonProps) => (
  <button
    onClick={handleClick}
    style={{
      padding: "10px 20px",
      margin: "5px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    }}
  >
    {text}
  </button>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allComments, setAllComments] = useState(0);
  const [positive, setPositive] = useState(0);

  const addGoodComment = () => {
    const newAllComments = allComments + 1;
    const newGood = good + 1;
    setAllComments(newAllComments);
    setGood(newGood);
    setPositive((newGood * 100) / newAllComments);
  };

  const addNeutralComment = () => {
    const newAllComments = allComments + 1;
    setAllComments(newAllComments);
    setNeutral(neutral + 1);
    setPositive((good * 100) / newAllComments);
  };

  const addBadComment = () => {
    const newAllComments = allComments + 1;
    const newBad = bad + 1;
    setAllComments(newAllComments);
    setBad(newBad);
    setPositive((good * 100) / newAllComments);
  };

  const calculateAverage = good * 1 + neutral * 0 + bad * -1;
  const finalAverage = allComments ? calculateAverage / allComments : 0;

  return (
    <div>
      <h1 style={{ color: "blueviolet", textAlign: "left" }}>give feedback</h1>
      <div>
        <Button handleClick={addGoodComment} text="good" />
        <Button handleClick={addNeutralComment} text="neutral" />
        <Button handleClick={addBadComment} text="bad" />
      </div>
      
      <h1 style={{ color: "blueviolet", textAlign: "left" }}>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        allComments={allComments}
        finalAverage={finalAverage}
        positive={positive}
      />
    </div>
  );
};

export default App;
