import {
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  useCallback,
  useEffect,
  useRef,
} from "react";

import "./CountUp.css";

export default function CountUp({
  value,
  suffix="",
  label,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
}) {

  const ref = useRef(null);

  const motionValue = useMotionValue(
    direction === "down"
      ? value
      : from
  );

  const springValue = useSpring(
    motionValue
  );

  const isInView = useInView(ref, {
    once: true,
  });

  const formatValue = useCallback(
    (latest) => {

      return Intl.NumberFormat(
        "en-US"
      ).format(
        latest.toFixed(0)
      );

    },
    []
  );

  useEffect(() => {

    if (isInView) {

      const timeout = setTimeout(() => {

        motionValue.set(
          direction === "down"
            ? from
            : value
        );

      }, delay * 1000);

      return () => clearTimeout(timeout);
    }

  }, [
    isInView,
    motionValue,
    direction,
    from,
    value,
    delay,
  ]);

  useEffect(() => {

    const unsubscribe = springValue.on(
      "change",
      (latest) => {

        if (ref.current) {

          ref.current.textContent =
            formatValue(latest);

        }
      }
    );

    return () => unsubscribe();

  }, [springValue, formatValue]);

  return (

    <article className="countup-card">

    <div className="countup-number">

      <span className="countup-suffix">
        {suffix}
      </span>

      <span ref={ref} />

    </div>

    <p className="countup-label">
      {label}
    </p>

  </article>

  );
}