export function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Welcome back Nous</h2>

      <div className="stats">
        <div className="card">
          <strong>12 </strong>
          <span>Courses</span>
        </div>
        <div className="card">
          <strong>5 </strong>
          <span>Completed</span>
        </div>
        <div className="card">
          <strong>3 </strong>
          <span>In Progress</span>
        </div>
      </div>
    </div>
  );
}
