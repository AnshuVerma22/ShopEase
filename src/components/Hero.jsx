function Hero({
    name,
    role,
    city,
    experience,
    company,
}) {
  return (
    <section>
      <h1>Welcome, {name}</h1>
      <h2>{role}</h2>
      <p>
        <strong>City:</strong> {city}
      </p>
      <p>
        <strong>Status:</strong> {experience}
      </p>
      <p>
        <strong>Company:</strong> {company}
      </p>
      <p>
        Discover amazing products at affordable prices.
      </p>

      <button>Shop Now</button>
    </section>
  );
}

export default Hero;