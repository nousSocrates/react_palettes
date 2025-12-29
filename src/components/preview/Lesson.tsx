// export function Lesson() {
//   return (
//     <div className="lesson">
//       <aside className="lesson-sidebar">
//         <strong className="lesson-sidebar__title">Course Modules</strong>

//         <ul className="lesson-nav">
//           <li className="active">1. What is Philosophy?</li>
//           <li>2. The Socratic Method</li>
//           <li>3. Logic & Reasoning</li>
//           <li>4. Ethics Overview</li>
//         </ul>
//       </aside>

//       <article className="lesson-content">
//         <header className="lesson-header">
//           <h2>What is Philosophy?</h2>
//           <span className="lesson-progress">Lesson 1 of 4</span>
//         </header>

//         <p>
//           Philosophy is the study of fundamental questions about existence,
//           knowledge, values, reason, and mind.
//         </p>

//         <p>
//           In the Socratic tradition, philosophy begins with questioning — not
//           answers, but <em>careful inquiry</em>.
//         </p>

//         <blockquote>
//           “The unexamined life is not worth living.”
//           <span>— Socrates</span>
//         </blockquote>

//         <h3>Why Philosophy Matters</h3>

//         <p>
//           Philosophy trains us to think clearly, argue carefully, and live
//           thoughtfully. These skills are essential in education and civic life.
//         </p>

//         <div className="lesson-callout">
//           <strong>Key Idea</strong>
//           <p>
//             Philosophy is not about memorizing facts — it’s about learning how
//             to think.
//           </p>
//         </div>

//         <footer className="lesson-actions">
//           <button>Mark Complete</button>
//           <button className="secondary">Next Lesson</button>
//         </footer>
//       </article>
//     </div>
//   );
// }
export function Lesson() {
  return (
    <div className="lesson">
      <aside className="lesson-sidebar">
        <span className="lesson-sidebar__title">Course Outline</span>

        <ul className="lesson-nav">
          <li className="active">Introduction</li>
          <li>What is Logic?</li>
          <li>Types of Reasoning</li>
          <li>Summary</li>
        </ul>
      </aside>

      <article className="lesson-content">
        <header className="lesson-header">
          <h1>Introduction to Logic</h1>
          <span className="lesson-progress">Lesson 1 of 8</span>
        </header>

        {/** content below **/}
        <section>
          <p>
            Logic is the study of reasoning. It helps us distinguish between
            good and bad arguments and teaches us how to think clearly and
            critically.
          </p>

          <h2>Why Logic Matters</h2>

          <p>
            In everyday life, we constantly evaluate claims, make decisions, and
            justify our beliefs. Logic provides a framework for doing this
            effectively.
          </p>

          <blockquote>
            “The unexamined life is not worth living.”
            <span>— Socrates</span>
          </blockquote>

          <h3>Key Benefits</h3>

          <ul>
            <li>Improves critical thinking</li>
            <li>Strengthens problem-solving skills</li>
            <li>Encourages clear communication</li>
          </ul>

          <div className="lesson-callout">
            <strong>Remember:</strong> Logic is not about winning arguments —
            it’s about discovering truth.
          </div>
        </section>
        {/* Lesson Footer */}
        <div className="lesson-actions">
          <button className="secondary">Previous</button>
          <button>Next Lesson</button>
        </div>
      </article>
    </div>
  );
}
