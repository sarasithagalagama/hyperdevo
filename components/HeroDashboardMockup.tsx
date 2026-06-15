const bars = [48, 72, 58, 86, 64, 92, 76];

export default function HeroDashboardMockup() {
  return (
    <div className="hero-dashboard" aria-label="HyperDevo digital growth dashboard mockup">
      <div className="dashboard-glow" />
      <div className="dashboard-card dashboard-main">
        <div className="dashboard-top">
          <div>
            <span className="status-dot" />
            <strong>Growth Console</strong>
          </div>
          <span>Live plan</span>
        </div>
        <h3>Premium website + campaign system</h3>
        <p>Connected pages, brand visuals, content, and conversion paths.</p>
        <div className="metric-grid">
          <div>
            <span>Brand trust</span>
            <strong>High</strong>
          </div>
          <div>
            <span>Mobile UX</span>
            <strong>Sharp</strong>
          </div>
          <div>
            <span>Campaigns</span>
            <strong>Ready</strong>
          </div>
        </div>
      </div>
      <div className="dashboard-card dashboard-chart">
        <span className="tag">Campaign Analytics</span>
        <div className="bar-chart">
          {bars.map((height, index) => (
            <i key={index} style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>
      <div className="dashboard-card dashboard-social">
        <span className="tag">Content Calendar</span>
        <div className="calendar-grid">
          {Array.from({ length: 12 }).map((_, index) => (
            <span key={index} className={index % 4 === 0 ? "active" : ""} />
          ))}
        </div>
      </div>
      <div className="dashboard-card dashboard-leads">
        <span>Lead generation</span>
        <strong>Inquiry paths mapped</strong>
      </div>
    </div>
  );
}
