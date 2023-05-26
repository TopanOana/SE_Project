import { Box, AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

export const AppMenuAdmin = () => {
	const location = useLocation();
	const path = location.pathname;

	return (
		<Box sx={{ marginBottom: "2%" }}>
			<AppBar position="absolute" >
				<Toolbar>
					<IconButton
						component={Link}
						to="/"
						size="large"
						edge="start"
						color="inherit"
						aria-label="school"
						sx={{ mr: 2 }}>
						<SchoolIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ mr: 5 }}>
						Bucket List Application (Admin mode)
					</Typography>
					<Button
						variant={path.startsWith("admin/publicListAdmin") ? "outlined" : "text"}
						to="admin/publicListAdmin"
						component={Link}
						color="inherit"
						sx={{ mr: 5 }}
						startIcon={<LocalLibraryIcon />}>
						Publc List
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};