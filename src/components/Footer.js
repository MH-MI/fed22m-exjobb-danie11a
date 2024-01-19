import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/rsz_2168027923_padded_logo-removebg-preview.png";

const Footer = () => {
	return (
		<Box mt="80px" bgcolor="#fff3f4">
			<Stack gap="40px" alignItems="center" px="40px" pt="24px">
				<img src={Logo} alt="logo" width="300px" height="200px" />
				<Typography variant="h5" pb="40px" mt="20px">
					Giggly Gains 💪🏽
				</Typography>
			</Stack>
		</Box>
	);
};

export default Footer;
