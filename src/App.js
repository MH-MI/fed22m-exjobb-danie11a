import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";

const App = () => {
	return (
		<Box width="400px" sx={{ width: { xl: "1488" } }} m="auto">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/signuplogin" element={<SignUp />} />

				<Route path="/login" element={<Login />} />

				<Route path="/userpage" element={<UserPage />} />

				<Route path="/exercise/:id" element={<ExerciseDetail />} />
			</Routes>
			<Footer />
		</Box>
	);
};

export default App;
