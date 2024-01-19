import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../App.css";

const UserPage = () => {
	const [entries, setEntries] = useState([]);

	const [newEntry, setNewEntry] = useState({
		date: "",
		workout: "walking",
		duration: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewEntry((prevEntry) => ({
			...prevEntry,
			[name]: value,
		}));
	};

	const handleAddEntry = () => {
		if (newEntry.date && newEntry.workout && newEntry.duration) {
			setEntries((prevEntries) => [...prevEntries, { ...newEntry }]);

			setNewEntry({
				date: "",
				workout: "walking",
				duration: "",
			});
		} else {
			alert("Please fill in all fields");
		}
	};

	const handleRemoveEntry = (index) => {
		setEntries((prevEntries) => {
			const updatedEntries = [...prevEntries];
			updatedEntries.splice(index, 1);
			return updatedEntries;
		});
	};

	const handleEditWorkout = (index, value) => {
		setEntries((prevEntries) => {
			const updatedEntries = [...prevEntries];
			updatedEntries[index].workout = value;
			return updatedEntries;
		});
	};

	return (
		<div>
			<h2>UserPage</h2>
			<br />
			<br />
			<div id="app">
				<table className="tracker">
					<thead>
						<tr>
							<th>Date</th>
							<th>Workout</th>
							<th>Duration</th>
							<th></th>
						</tr>
					</thead>
					<tbody className="tracker-entries">
						{entries.map((entry, index) => (
							<tr key={index} className="tracker-row">
								<td>{entry.date}</td>
								<td>
									<select
										name="workout"
										value={entry.workout}
										onChange={(e) =>
											handleEditWorkout(
												index,
												e.target.value
											)
										}
										className="tracker-workout"
									>
										<option value="walking">Walking</option>
										<option value="running">Running</option>
										<option value="outdoor-cycling">
											Outdoor Cycling
										</option>
										<option value="indoor-cycling">
											Indoor Cycling
										</option>
										<option value="swimming">
											Swimming
										</option>
										<option value="gym">Gym</option>
										<option value="yoga">Yoga</option>
										<option value="bodyweight-training">
											Bodyweight training
										</option>
									</select>
								</td>
								<td>{entry.duration} minutes</td>
								<td>
									<Button
										type="button"
										className="btn btn-danger"
										onClick={() => handleRemoveEntry(index)}
									>
										&times;
									</Button>
								</td>
							</tr>
						))}
					</tbody>
					<tbody>
						<tr className="tracker-row tracker-row--add">
							<td>
								<input
									type="date"
									name="date"
									value={newEntry.date}
									onChange={handleInputChange}
									className="tracker-date"
								/>
							</td>
							<td>
								<select
									name="workout"
									value={newEntry.workout}
									onChange={handleInputChange}
									className="tracker-workout"
								>
									<option value="walking">Walking</option>
									<option value="running">Running</option>
									<option value="outdoor-cycling">
										Outdoor Cycling
									</option>
									<option value="indoor-cycling">
										Indoor Cycling
									</option>
									<option value="swimming">Swimming</option>
									<option value="gym">Gym</option>
									<option value="yoga">Yoga</option>
									<option value="bodyweight-training">
										Bodyweight training
									</option>
								</select>
							</td>
							<td>
								<input
									type="number"
									name="duration"
									value={newEntry.duration}
									onChange={handleInputChange}
									className="tracker-duration"
								/>
								<span className="tracker-text">minutes</span>
							</td>
							<td>
								<Button
									type="button"
									className="tracker-button"
									onClick={handleAddEntry}
								>
									Add Entry
								</Button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default UserPage;
