import React from "react";
import AboutUs from "./AboutUs";
import LocationArea from "./LocationArea";
import Reviews from "./Reviews";
import HeroSection from "./HeroSection";

const Home = () => (
  <main>

    {/* Hero Section */}
    <HeroSection />

    {/* about us section */}

    <AboutUs />

    {/* Reviews */}

    <Reviews />

    {/* Location section  */}
    <LocationArea />

  </main>
);

export default Home;
