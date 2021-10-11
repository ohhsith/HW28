import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

export default function Header() {
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Link
              to="/"
              style={{ marginRight: "16px", textDecoration: "none" }}
            >
              <HealthAndSafetyIcon />
            </Link>
            <Link
              to="/appointments"
              style={{ marginRight: "16px", textDecoration: "none" }}
            >
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Appointments
              </Typography>
            </Link>
            <Link
              to="/events"
              style={{ marginRight: "16px", textDecoration: "none" }}
            >
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Events
              </Typography>
            </Link>
            <Link
              to="/doctors"
              style={{ marginRight: "16px", textDecoration: "none" }}
            >
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Doctors
              </Typography>
            </Link>
            <Link to="/clients" style={{ textDecoration: "none" }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Clients
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}
