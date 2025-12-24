type Course = {
  id: number;
  title: string;
  description: string;
  progress: number; // 0–100
};

const courses: Course[] = [
  {
    id: 1,
    title: "Introduction to Philosophy",
    description: "Foundations of critical thinking",
    progress: 100,
  },
  {
    id: 2,
    title: "Ethics & Society",
    description: "Moral reasoning in modern life",
    progress: 65,
  },
  {
    id: 3,
    title: "Logic & Argumentation",
    description: "How to reason clearly",
    progress: 30,
  },
];

export function Courses() {
  return (
    <div className="courses">
      <h2>Your Courses</h2>

      <div className="course-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-header">
              <h3>{course.title}</h3>
              <span
                className={`status ${
                  course.progress === 100 ? "completed" : "active"
                }`}
              >
                {course.progress === 100 ? "Completed" : "In Progress"}
              </span>
            </div>

            <p className="course-desc">{course.description}</p>

            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${course.progress}%` }}
              />
            </div>

            <button className="course-action">
              {course.progress === 100 ? "Review" : "Continue"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
