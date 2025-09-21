import { useState } from "react";

function Title() {
	return (
		<div className="Title">
			<h1>Kernel Quest</h1>
		</div>
	);
}

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
			<h3 className="form-title">Enter Your Name</h3>
			<form onSubmit={handleSubmit} className="form">
				<input
					type="text"
					name="firstName"
					placeholder="First Name"
					value={formData.firstName}
					onChange={handleChange}
					required
				/>

				<input
					type="text"
					name="lastName"
					placeholder="Last Name"
					value={formData.lastName}
					onChange={handleChange}
					required
				/>

				<h4>are you aready?</h4>

				<button type="submit">Enter game</button>
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
