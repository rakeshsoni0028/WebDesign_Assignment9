import React, { useState } from "react";
import ResponsiveAppBar from "../Navbar/ResponsiveAppBar";
import Footer from "../Footer/Footer";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useLocation } from "react-router-dom";
import target from "../../Images/target.jpg";
import { useNavigate } from "react-router-dom";
import Grow from "@mui/material/Grow";
import { Box, Container, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import MaterialCard from "../Reusable/MaterialCard";
import frontend from "../../Images/frontend.jpg";
import fullstack from "../../Images/fullstack.jpg";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Home = () => {
  const location = useLocation();
  const { isLoggedIn, firstName } = location.state || {
    isLoggedIn: false,
    firstName: "",
  };
  const [open, setOpen] = React.useState(isLoggedIn);
  const navigate = useNavigate();
  let [arr, setArr] = useState([
    {
      title: "Full-Stack Developer",
      text: "Experienced Full Stack Developer adept at designing and implementing scalable web applications, proficient in both front-end technologies.",
      image: fullstack,
    },
    {
      title: "Frontend Developer",
      text: "Passionate Frontend Developer with expertise in crafting intuitive user interfaces and seamless user experiences.",
      image: frontend,
    },
  ]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const navigateToJobs = () => {
    navigate("/jobs");
  };
  const handleOnClick = () => {
    navigate("/jobs");
  };

  return (
    <>
      <ResponsiveAppBar />
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          height: "100vh",
          width: "auto",
        }}
      >
        <Box sx={{ flexBasis: "40%" }}>
          <Typography variant="h2" fontWeight="700">
            Seize <span style={{ color: "#FA541C" }}>Opportunities</span> <br />
            Transform <span style={{ color: "#FA541C" }}>Careers</span>
            <br />
          </Typography>
          <Fab variant="extended" color="secondary" onClick={handleOnClick}>
            <NavigationIcon sx={{ mr: 1 }} />
            See All Jobs
          </Fab>
        </Box>
        <Box
          sx={{
            flexBasis: "60%",
            backgroundImage: `url(${target})`,
            backgroundSize: "cover",
            height: "60%",
          }}
        ></Box>
      </Container>
      <Paper
        elevation={6}
        sx={{
          margin: "20px",
          borderRadius: "30px",
          backgroundColor: "#F4F6F8",
          padding: "40px",
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ textAlign: "center" }}>
          Popular Jobs
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {arr.map((e) => {
            return (
              <MaterialCard title={e.title} text={e.text} image={e.image} />
            );
          })}
        </div>
      </Paper>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionComponent={Grow}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Hello {firstName}, Looking for a Job?
        </Alert>
      </Snackbar>
      <Footer></Footer>
    </>
  );
};

export default Home;
