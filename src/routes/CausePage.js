import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Cause from "../components/Cause";

function CausePage() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://plus.unsplash.com/premium_photo-1682092826607-8c914d8db82f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGluZGlhbiUyMGNoaWxkcmVuc3xlbnwwfHwwfHx8MA%3D%3D"
        title="Our Cause"
      />
      <Cause />
      <Footer />
    </>
  );
}

export default CausePage;
