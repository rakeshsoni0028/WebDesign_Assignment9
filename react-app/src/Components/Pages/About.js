import React, { useState } from "react";
import ResponsiveAppBar from "../Navbar/ResponsiveAppBar.js";
import Container from "@mui/material/Container";
import "../../Styles/Jobs.css"
import CusCard from "../Reusable/CusCard";
import Footer from "../Footer/Footer";
import backend from "../../Images/backend.jpg";


const About = () => {
  let [arr, setArr] = useState([
    {
      title: "About Us",
      text: "Welcome to Career Fair, where opportunities meet talent, and careers are crafted. We believe in connecting exceptional individuals with exciting job prospects.",
      image: backend
    },
    {
      title: "Our Mission",
      text: "At Career Fair, our mission is to bridge the gap between talent and opportunity. We strive to empower individuals to reach their career aspirations.",
      image: backend,
    },
    {
      title: "What Sets Us Apart",
      text: "Diverse Opportunities: Explore a wide range of job opportunities across industries and skill sets. Personalized Approach: We understand that every candidate and employer is unique.",
      image: backend,
    }

  ]);
  return (
    <>
      <ResponsiveAppBar />
      <div className="custom-container">
        {arr.map((e) => {
          return <CusCard title={e.title} text={e.text} image={e.image} />;
        })}
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
