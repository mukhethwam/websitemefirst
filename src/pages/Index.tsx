
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import MiningCommodities from "@/components/MiningCommodities";
import AboutUs from "@/components/AboutUs";
import Director from "@/components/Director";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Services />
      <Fleet />
      <MiningCommodities />
      <AboutUs />
      <Director />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
