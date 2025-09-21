import { useState } from "react";

export default function Question({ questionData, onAnswer }) {
	const [selected, setSelected] = useState(null);
	const [isCorrect, setIsCorrect] = useState(null);

	const handleSelect = (choice) => {
		setSelected(choice);
		if (choice === questionData.correctAnswer) {
			setIsCorrect(true);
			onAnswer(choice, true);
		} else {
			setIsCorrect(false);
			onAnswer(choice, false);
		}
	};

	return (
		<div className="question-container">
			<h2 className="question-title">{questionData.question}</h2>
			<div className="choices">
				{questionData.choices.map((choice, index) => (
					<button
						key={index}
						className={`choice-btn ${
							selected === choice
								? isCorrect
									? "correct"
									: "wrong"
								: ""
						}`}
						onClick={() => handleSelect(choice)}
						disabled={selected !== null} // disable after answering
					>
						{choice}
					</button>
				))}
			</div>

			{isCorrect !== null && (
				<p className="result-text">
					{isCorrect ? "✅ Correct!" : "❌ Wrong!"}
				</p>
			)}
		</div>
	);
}
