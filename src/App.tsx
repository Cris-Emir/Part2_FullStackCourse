import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Display = (props) => (
  <div>
    {props.txt} {props.value}
  </div>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allComments, setAllComments] = useState(0);
  const [positive, setPositive] = useState(0);

  const addGoodComment = () => {
    console.log("Good value:", good);
    setAllComments(allComments + 1);
    setGood(good + 1);

    setPositive((good * 100) / allComments);
  };

  const addNeutralComment = () => {
    console.log("Neutral value:", neutral);
    setAllComments(allComments + 1);
    setNeutral(neutral + 1);

    setPositive((good * 100) / allComments);
  };

  const addBadComment = () => {
    console.log("Bad value:", bad);
    setAllComments(allComments + 1);
    setBad(bad + 1);

    setPositive((good * 100) / allComments);
  };

  const calculateAverage = good * 1 + neutral * 0 + bad * -1;
  const finalAverage = calculateAverage / allComments;

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={() => addGoodComment()} text="good" />
        <Button handleClick={() => addNeutralComment()} text="neutral" />
        <Button handleClick={() => addBadComment()} text="bad" />
      </div>

      <h1>stadistics</h1>
      <Display txt="good" value={good} />
      <Display txt="neutral" value={neutral} />
      <Display txt="bad" value={bad} />
      <Display txt="all" value={allComments} />
      <Display txt="average" value={finalAverage} />
      <Display txt="positive" value={positive} />
    </div>
  );
};

export default App;
