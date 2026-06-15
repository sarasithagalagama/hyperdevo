const capabilities = ["Web Development", "Brand Strategy", "Meta Ads", "Google Ads", "SEO", "Content Design"];

export default function SocialProofStrip() {
  return (
    <section className="social-proof" aria-label="HyperDevo capabilities">
      <div className="container">
        <p>You&apos;re in good hands</p>
        <div className="capability-row">
          {capabilities.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
