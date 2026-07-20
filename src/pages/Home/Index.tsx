import React from "react";
import StarField from "../../components/StarField";
import Hero from "../../sections/Hero/Hero";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen universe-radial overflow-x-hidden">
      <StarField />
      <main className="relative z-10 w-full px-3 2xs:px-4 xs:px-4">
        <section
          aria-label="Hero"
          className="flex flex-col items-center justify-center w-full"
        >
          <Hero />
        </section>
      </main>
    </div>
  );
};

export default Home;
