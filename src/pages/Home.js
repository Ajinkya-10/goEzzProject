import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ParentSection from "../components/ParentSection";
import Provider from "../components/ProviderSection";
import AboutSection from "../components/AboutSection";
import SecuritySection from "../components/SecuritySection";
import ConnectedSection from "../components/ConnectedSection";
import ContactSection from "../components/ContactSection";
import DownloadLinksSection from "../components/DownloadLinksSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div style={{position: "relative"}}>
      <img src="/images/children.png" alt="" className="mainBg" />
      <div class="web-top"></div>
      <Header />
      <HeroSection />
      <div className="partner_container">
        <img src="/images/back2.png" alt="" />
        <ParentSection />
        <Provider />
      </div>
      <div className="custom_container">
        <img src="/images/back3.png" alt="" />
        <AboutSection />
        <SecuritySection />
        <ConnectedSection />
        <img src="/images/back4.png" alt=""/>
      </div>
      <ContactSection />
      <DownloadLinksSection />
      <Footer />
    </div>
  );
}
