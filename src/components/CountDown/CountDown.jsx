import { useEffect, useState } from "react";

import "./CountDown.css";

export default function Countdown({
  title = "Próximo Evento",
  subtitle = "Prepárate para vivir la experiencia",
  targetDate,
}) {

  const calculateTimeLeft = () => {

    const difference =
      new Date(targetDate) - new Date();

    if (difference <= 0) {

      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {

      days: Math.floor(
        difference / (1000 * 60 * 60 * 24)
      ),

      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),

      minutes: Math.floor(
        (difference / 1000 / 60) % 60
      ),

      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] =
    useState(calculateTimeLeft());

  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft(calculateTimeLeft());

    }, 1000);

    return () => clearInterval(timer);

  }, [targetDate]);

  return (

    <section className="countdown-section">

      <div className="countdown-header">

        <h2>
          {title}
        </h2>

        <p>
          {subtitle}
        </p>

      </div>

      <div className="countdown-grid">

        <div className="countdown-box countdown-days">
            <span className="countdown-number">
            {timeLeft.days}
            </span>

            <span className="countdown-label">
            Días
            </span>
        </div>

        <div className="countdown-separator">
            :
        </div>

        <div className="countdown-box">
            <span className="countdown-number">
            {timeLeft.hours}
            </span>

            <span className="countdown-label">
            Horas
            </span>
        </div>

        <div className="countdown-separator">
            :
        </div>

        <div className="countdown-box">
            <span className="countdown-number">
            {timeLeft.minutes}
            </span>

            <span className="countdown-label">
            Min
            </span>
        </div>

        <div className="countdown-separator">
            :
        </div>

        <div className="countdown-box">
            <span className="countdown-number">
            {timeLeft.seconds}
            </span>

            <span className="countdown-label">
            Seg
            </span>
        </div>

        </div>

    </section>
  );
}