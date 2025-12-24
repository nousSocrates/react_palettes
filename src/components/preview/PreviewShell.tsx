type Screen = "dashboard" | "courses" | "lesson";

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
          <a
            className={screen === "dashboard" ? "active" : ""}
            onClick={() => onNavigate("dashboard")}
          >
            Dashboard
          </a>
          <a
            className={screen === "courses" ? "active" : ""}
            onClick={() => onNavigate("courses")}
          >
            Courses
          </a>
          <a
            className={screen === "lesson" ? "active" : ""}
            onClick={() => onNavigate("lesson")}
          >
            Lesson
          </a>
        </nav>

        <section className="lms-content">{children}</section>
      </div>
    </div>
  );
}
