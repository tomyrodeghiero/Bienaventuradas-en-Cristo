import React from "react";
import Hero from "../components/hero/Hero";
import Posts from "../components/posts/Posts";
import Community from "../components/community/Community";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Posts />
      <Community />
      <Footer />
    </main>
  );
};

export default HomePage;
