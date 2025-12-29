type Screen = "dashboard" | "courses" | "lesson" | "assessment";

type Props = {
  children: React.ReactNode;
  screen: Screen;
  onNavigate: (screen: Screen) => void;
};

export function PreviewShell({ children, screen, onNavigate }: Props) {
  return (
    <div className="lms">
      <header className="lms-header">
        <strong>Socrates LMS</strong>
        <span className="lms-user">Student</span>
      </header>

      <div className="lms-body">
        <nav className="lms-sidebar">
          <button
            className={screen === "dashboard" ? "active" : ""}
            onClick={() => onNavigate("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={screen === "courses" ? "active" : ""}
            onClick={() => onNavigate("courses")}
          >
            Courses
          </button>
          <button
            className={screen === "lesson" ? "active" : ""}
            onClick={() => onNavigate("lesson")}
          >
            Lesson
          </button>
          <button
            className={screen === "assessment" ? "active" : ""}
            onClick={() => onNavigate("assessment")}
          >
            Assessment
          </button>
        </nav>

        <section className="lms-content">{children}</section>
      </div>
    </div>
  );
}
