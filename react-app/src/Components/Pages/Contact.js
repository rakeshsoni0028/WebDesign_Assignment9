import React, { useState } from "react";
import CusCard from "../Reusable/CusCard";
import backend from "../../Images/backend.jpg";
import ResponsiveAppBar from '../Navbar/ResponsiveAppBar';
import Container from '@mui/material/Container';
import "../../Styles/Jobs.css";
import Footer from '../Footer/Footer';

const Contact = () => {
  let [arr, setArr] = useState([
    {
      title: "Customer Support",
      text: "Our dedicated customer support team is available to assist you with any inquiries you may have.",
      image: backend
    }
  ]);
  return (
    <>
    <div style={{display:'flex',flexDirection:'column',height:'100vh'}}>
      <ResponsiveAppBar />
      <Container>
      <h1 className='banner'>Contact Us</h1>
      <p className='para'><i>Have questions, suggestions, or need assistance? We're here to help you navigate your journey to new career possibilities. Feel free to reach out to us using the contact details below:</i></p>
      <br/>
      <br/>
      <div className="custom-container">
        {arr.map((e) => {
          return <CusCard title={e.title} text={e.text} image={e.image} />;
        })}
      </div>
      <br/><br/>
    </Container>
      <Footer></Footer>
    </div>
    </>
  );
};

export default Contact;
