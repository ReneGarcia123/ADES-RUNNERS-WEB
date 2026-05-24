import Hero from "../../components/Hero/Hero.jsx";
import Features from "../../components/Features/Features.jsx"
import EventsSection from "../../components/Events/EventsSection.jsx";
import "./Home.css";
import CountUp from "../../components/CountUp/CountUp.jsx";
import statsData from "../../components/CountUp/statsData.js";
import GroupsWtsp from "../../components/GroupsWtsp/GroupsWtsp.jsx";
function Home() {
  return (
    <main className="home-container">
      <Hero />

      <Features/>

      <EventsSection/>
       <section className="stats-section">
        {/* HEADER */}
        <div className="stats-header">
          <h2>
            {statsData.title}
          </h2>
          <p>
            {statsData.subtitle}
          </p>
        </div>
        {/* STATS */}
        <div className="stats-grid">
          {statsData.stats.map((item, index) => (
            <CountUp
              key={index}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
            />
          ))}
        </div>
      </section>
    <GroupsWtsp/>

    </main>
  );
}

export default Home;