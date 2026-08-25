import "../index.css";

function Cards({ children, className }) {
  return (
    <>
      <section id="card" className={className}>
        {children}
      </section>
    </>
  );
}

export default Cards;
