import React from "react";
import Home1 from "../pages/Home1";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Footer from "../component/Footer"
// import Navbar from '../navbar/Navbar'
import Projeactscard from "../pages/Projeactscard";
const Home = () => {
  return (
    <>
    	{/* <Navbar/> */}
      <Home1 />
      <About />
      <Services />
      <Projeactscard/>
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
