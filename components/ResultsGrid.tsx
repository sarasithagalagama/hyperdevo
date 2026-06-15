const results = [
  ["01", "+ Better Brand Trust", "Stronger first impression", "Your website and visuals should make customers trust your business faster."],
  ["02", "+ Clearer Digital Presence", "Better online visibility", "We help your brand show up clearly across search, social media, and campaigns."],
  ["03", "+ More Qualified Leads", "More customer inquiries", "We design pages, content, and campaigns around actions that matter."],
  ["04", "+ Stronger Visual Identity", "Consistent brand presence", "Your website, social media, and marketing assets should feel connected."],
];

export default function ResultsGrid() {
  return (
    <div className="results-grid">
      {results.map(([number, metric, title, description]) => (
        <article className="result-card" key={title}>
          <div>
            <span>{number}</span>
            <em>{metric}</em>
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </article>
      ))}
    </div>
  );
}
