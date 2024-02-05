import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Stack, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

//import Logo from "../assets/images/pngtree-physical-fitness-sport-gym-logo-bodybuilder-with-big-muscles-posing-isolated-png-image_1857715-removebg-preview(1).png";

const Navbar = ({ isAuthenticated }) => {
	const [isDrawerOpen, setDrawerOpen] = useState(false);

	const handleDrawerOpen = () => {
		setDrawerOpen(true);
	};

	const handleDrawerClose = () => {
		setDrawerOpen(false);
	};

	return (
		<>
			{/* Hamburger icon for smaller devices */}
			<IconButton
				onClick={handleDrawerOpen}
				sx={{ display: { sm: "none", xs: "block" } }}
			>
				<MenuIcon />
			</IconButton>
			<Drawer
				anchor="right"
				open={isDrawerOpen}
				onClose={handleDrawerClose}
			>
				<Stack
					direction="column"
					gap="24px"
					p="20px"
					sx={{ width: "200px" }}
				>
					<Link to="/">Home</Link>
					<Link to="/signuplogin">Sign Up</Link>
					{isAuthenticated && <Link to="/userpage">UserPage</Link>}
					<a href="#exercises">Exercises</a>
				</Stack>
			</Drawer>
			{/* Original Stack for larger devices */}
			<Stack
				direction={{ sm: "row", xs: "column" }}
				gap="40px"
				fontSize="24px"
				alignItems={{ sm: "flex-end", xs: "flex-start" }}
				sx={{
					px: "20px",
					mt: { sm: "32px", xs: "20px" },
					display: { sm: "flex", xs: "none" }, // Show on larger devices
				}}
			>
				<Link
					to="/"
					style={{
						fontFamily: "sans-serif",
						textDecoration: "none",
						color: "#3A1212",
					}}
				>
					Home
				</Link>
				<Link
					to="/signuplogin"
					style={{
						fontFamily: "sans-serif",
						textDecoration: "none",
						color: "#3A1212",
					}}
				>
					Sign Up
				</Link>
				{isAuthenticated && (
					<Link
						to="/userpage"
						style={{
							fontFamily: "sans-serif",
							textDecoration: "none",
							color: "#3A1212",
						}}
					>
						UserPage
					</Link>
				)}
				<a
					href="#exercises"
					style={{
						fontFamily: "sans-serif",
						textDecoration: "none",
						color: "#3A1212",
					}}
				>
					Exercises
				</a>
			</Stack>
		</>
	);
};

export default Navbar;
