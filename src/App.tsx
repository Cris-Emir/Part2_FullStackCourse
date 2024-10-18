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

  const addGoodComment = () => {
    console.log("Good value:", good);
    setGood(good + 1);
  };

  const addNeutralComment = () => {
    console.log("Neutral value:", neutral);
    setNeutral(neutral + 1);
  };

  const addBadComment = () => {
    console.log("Bad value:", bad);
    setBad(bad + 1);
  };

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
    </div>
  );
};

export default App;
