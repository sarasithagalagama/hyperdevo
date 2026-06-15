const other = ["Random designs without strategy", "One-size-fits-all content", "Slow communication", "Weak mobile experience", "No clear growth direction"];
const hyperdevo = ["Creative strategy before design", "Websites built for conversion", "Mobile-first user experience", "Consistent brand visuals", "Clear communication and delivery", "Local understanding with global quality"];

export default function ComparisonSection() {
  return (
    <section className="section comparison-section">
      <div className="container">
        <p className="eyebrow">WHY HYPERDEVO</p>
        <h2>Why work with HyperDevo?</h2>
        <div className="comparison-grid">
          <article className="comparison-card muted">
            <h3>Other Agencies</h3>
            <ul>
              {other.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">×</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="comparison-card featured">
            <h3>HyperDevo</h3>
            <ul>
              {hyperdevo.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
