import { useState } from "react";
import Title from "./Title";

function UserInfo() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Submitted:", formData);
	};

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit} className="form">
				<input
					type="text"
					name="firstName"
					placeholder="First name"
					className="name-input"
					value={formData.firstName}
					onChange={handleChange}
					required
				/>

				<input
					type="text"
					name="lastName"
					placeholder="Last Name"
					className="name-input"
					value={formData.lastName}
					onChange={handleChange}
					required
				/>

				<h4>are you ready?</h4>

				<button type="submit" className="CTA-button">Enter game</button>
			</form>
		</div>
	);
}

export default function App() {
	return (
		<>
			<Title></Title>
			<UserInfo></UserInfo>
		</>
	);
}
