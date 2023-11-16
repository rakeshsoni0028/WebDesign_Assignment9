import React, { useState } from "react";
import ResponsiveAppBar from "../Navbar/ResponsiveAppBar";
import CusCard from "../Reusable/CusCard";
import backend from "../../Images/backend.jpg";
import frontend from "../../Images/frontend.jpg";
import fullstack from "../../Images/fullstack.jpg";
import analyst from "../../Images/data analyst.jpg";
import science from "../../Images/data science.jpg";
import ux from "../../Images/user experience.jpg";
import "../../Styles/Jobs.css";
import Footer from "../Footer/Footer";

const Jobs = () => {
  let [arr, setArr] = useState([
    {
      title: "Backend Developer",
      text: "Versatile Backend Developer skilled in designing and implementing robust server-side architecture using technologies like Node.js and Python/Django.            ",
      image: backend,
    },
    {
      title: "Frontend Developer",
      text: "Passionate Frontend Developer with expertise in crafting intuitive user interfaces and seamless user experiences.",
      image: frontend,
    },
    {
      title: "Full-Stack Developer",
      text: "Experienced Full Stack Developer adept at designing and implementing scalable web applications, proficient in both front-end technologies.",
      image: fullstack,
    },
    {
      title: "Data Analyst",
      text: "Using automated tools to extract data from primary and secondary sources Removing corrupted data and fixing coding errors and related problems",
      image: analyst,
    },
    {
      title: "Data Science",
      text: "Comparing data points to current company processes. Writing reports outlining business predictions or proposals",
      image: science,
    },
    {
      title: "User Experience",
      text: "Create interective web pages using React",
      image: ux,
    },
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

export default Jobs;
