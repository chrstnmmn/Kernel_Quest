import Question from "./Question";

export default function MainGame() {
  const [answer, setAnswer] = useState(null);

  const sampleQuestion = {
    question:
      "Which OS concept prevents two processes from using the same resource at the same time?",
    choices: [
      "Deadlock",
      "Mutual Exclusion",
      "Starvation",
      "Race Condition",
    ],
    correctAnswer: "Mutual Exclusion",
  };
  const handleAnswer = (choice, correct) => {
    setAnswer({ choice, correct });
    console.log(
      "User selected:",
      choice,
      "->",
      correct ? "Correct" : "Wrong"
    );
  };

  return (
    <div>
      <Question questionData={sampleQuestion} onAnswer={handleAnswer} />
      {answer && (
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          You picked: {answer.choice} →{" "}
          {answer.correct ? "Correct ✅" : "Wrong ❌"}
        </p>
      )}
    </div>
  );
}