import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { useState } from "react";
import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";
import { useEffect } from "react";

const App = () => {
	const [isAuthenticated, setAuthenticated] = useState(false);

	useEffect(() => {
		document.title = "Giggly Gains";
	}, []);

	return (
		<Box width="400px" sx={{ width: { xl: "1488" } }} m="auto">
			<Navbar isAuthenticated={isAuthenticated} />
			<Routes>
				<Route path="/" element={<Home />} />

				<Route
					path="/signuplogin"
					element={<SignUp setAuthenticated={setAuthenticated} />}
				/>

				<Route
					path="/login"
					element={<Login setAuthenticated={setAuthenticated} />}
				/>

				<Route
					path="/userpage"
					element={<UserPage isAuthenticated={isAuthenticated} />}
				/>

				<Route path="/exercise/:id" element={<ExerciseDetail />} />
			</Routes>
			<Footer />
		</Box>
	);
};

export default App;
