import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/alexander-jawfox-Kl2t5U6Gkm0-unsplash.jpg";

const HeroBanner = () => {
	return (
		<Box
			sx={{
				mt: { lg: "212px", xs: "70px" },
				ml: { sm: "50px" },
			}}
			position="relative"
			p="20px"
		>
			<Typography color="#CE5A67" fontWeight="600" fontSize="26px">
				Fitness Club
			</Typography>
			<Typography
				fontWeight={700}
				sx={{ fontSize: { lg: "44px", xs: "40px" } }}
				mb="23px"
				mt="30px"
			>
				Sweat, Smile <br /> and Repeat
			</Typography>
			<Typography fontSize="22px" lineHeight="35px" mb={4}>
				Check out the most effective exercises
			</Typography>
			<Button
				variant="contained"
				color="secondary"
				href="#exercises"
				sx={{
					backgroundColor: "grey",
					padding: "10px",
					"&:hover": {
						backgroundColor: "#FFFAFB",
						color: "#ff2625",
						border: "1 px solid #ff2625",
					},
				}}
			>
				Explore Exercises
			</Button>
			<Typography
				fontWeight={600}
				color="#f2625"
				sx={{
					opacity: 0.1,
					display: { lg: "block", xs: "none" },
				}}
				fontSize="160px"
			>
				Exercise
			</Typography>
			<img
				src={HeroBannerImage}
				alt="banner"
				className="hero-banner-img"
			/>
		</Box>
	);
};

export default HeroBanner;
