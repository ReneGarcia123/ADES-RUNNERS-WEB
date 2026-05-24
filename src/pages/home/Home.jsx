import Hero from "../../components/Hero/Hero.jsx";
import Features from "../../components/Features/Features.jsx"
import EventsSection from "../../components/Events/EventsSection.jsx";
import "./Home.css";
import CountUp from "../../components/CountUp/CountUp.jsx";
import statsData from "../../components/CountUp/statsData.js";

function Home() {
  return (
    <main className="home-container">
      <Hero />
      <Features/>
      <EventsSection/>
      <section className="stats-grid">
        {statsData.map((item, index) => (
          <CountUp
            key={index}
            value={item.value}
            label={item.label}
          />
        ))}
      </section>    
    </main>
  );
}

export default Home;