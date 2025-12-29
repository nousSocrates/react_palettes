export function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <h1>Welcome back, Nous</h1>
          <p>Your learning progress this week</p>
        </div>

        <button className="primary-action">Continue Learning</button>
      </header>

      <div className="dashboard-stats">
        {[
          { label: "Courses", value: 12 },
          { label: "Completed", value: 5 },
          { label: "In Progress", value: 4 },
          { label: "Certificates", value: 2 },
        ].map((stat) => (
          <div key={stat.label} className="stat-card">
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </div>
      <section className="dashboard-section">
        <h2>Recent Activity</h2>

        <ul className="activity-list">
          <li>Completed “Introduction to Logic”</li>
          <li>Started “Critical Thinking Basics”</li>
          <li>Earned Certificate: Ethics</li>
        </ul>
      </section>

      <div className="dashboard-cta">
        <h3>Keep the momentum going</h3>
        <p>Resume your last lesson and stay consistent.</p>
        <button>Resume Lesson</button>
      </div>

      {/* rest below */}
    </div>
  );
}
