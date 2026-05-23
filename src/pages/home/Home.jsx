import Hero from "../../components/Hero/Hero.jsx";
import Features from "../../components/Features/Features.jsx"
import "./Home.css";

function Home() {
  return (
    <main className="home-container">
      <Hero />
      <Features></Features>
    </main>
  );
}

export default Home;