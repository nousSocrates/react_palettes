export function Assessment() {
  return (
    <div className="assessment">
      <header className="assessment-header">
        <h1>Lesson Quiz</h1>
        <span className="assessment-meta">Question 1 of 5</span>
      </header>

      <div className="assessment-card">
        <p className="assessment-question">
          Which of the following best describes logic?
        </p>

        <form className="assessment-form">
          <label className="option">
            <input type="radio" name="q1" />
            <span>Memorization of facts</span>
          </label>

          <label className="option">
            <input type="radio" name="q1" />
            <span>Study of correct reasoning</span>
          </label>

          <label className="option">
            <input type="radio" name="q1" />
            <span>Expression of opinions</span>
          </label>

          <p className="form-helper">Choose the most accurate answer.</p>

          <div className="assessment-actions">
            <button className="secondary">Back</button>
            <button>Submit Answer</button>
          </div>
        </form>
      </div>
    </div>
  );
}
