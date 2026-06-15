export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Abstract website, campaign, social media, and global reach dashboard">
      <div className="visual-grid" />
      <div className="mock-card website-card">
        <div className="browser-bar" />
        <h3>Website Launch</h3>
        <p>Responsive pages with clear conversion paths.</p>
        <div className="mock-lines">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="mock-card analytics-card">
        <span className="tag">Campaign</span>
        <strong>+148%</strong>
        <p>Qualified inquiries</p>
        <div className="chart-line" />
      </div>
      <div className="mock-card social-card">
        <span className="tag">Content</span>
        <div className="post-square" />
        <p>Monthly social kit</p>
      </div>
      <div className="mock-card global-card">
        <span>LK → Worldwide</span>
        <strong>Global-ready brand systems</strong>
      </div>
    </div>
  );
}
