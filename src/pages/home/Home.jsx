import Hero from "../../components/Hero/Hero.jsx";
import Features from "../../components/Features/Features.jsx"
import EventsSection from "../../components/Events/EventsSection.jsx";
import "./Home.css";

function Home() {
  return (
    <main className="home-container">
      <Hero />
      <Features/>
      <EventsSection/>
    </main>
  );
}

export default Home;