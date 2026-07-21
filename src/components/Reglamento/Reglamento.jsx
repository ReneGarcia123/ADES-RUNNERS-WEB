import "./Reglamento.css";

export default function Reglamento({ data }) {
  return (
    <section
      className="reglamento"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,.72),
            rgba(0,0,0,.72)
          ),
          url(${data.image})
        `,
      }}
    >
      <div className="reglamento-content">

        <span className="reglamento-tag">
          {data.titulo2}
        </span>

        <h2>
          {data.title}
        </h2>

        <p>
          {data.subtitle}
        </p>

        <a
          href={data.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="reglamento-btn"
        >
          {data.buttonText}
        </a>

      </div>
    </section>
  );
}