import React from "react";
import StarField from "../../components/StarField";
import Hero from "../../sections/Hero/Hero";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen universe-radial">
      <StarField />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default Home;
