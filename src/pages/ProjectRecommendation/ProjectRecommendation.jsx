import "./ProjectRecommendation.css";

const projects = [
  {
    id: 1,
    title: "AI Chatbot",
    difficulty: "Beginner",
    duration: "2 Weeks",
    skills: "React, Node.js",
  },
  {
    id: 2,
    title: "Portfolio Website",
    difficulty: "Intermediate",
    duration: "1 Week",
    skills: "React, Tailwind CSS",
  },
  {
    id: 3,
    title: "Expense Tracker",
    difficulty: "Advanced",
    duration: "3 Weeks",
    skills: "React, MongoDB",
  },
  {
    id: 4,
    title: "E-Commerce Store",
    difficulty: "Intermediate",
    duration: "4 Weeks",
    skills: "React, Firebase",
  },
];

function ProjectRecommendation() {
  return (
    <div className="project-page">

      <div className="header">
        <h1>Project Recommendation</h1>
        <p>Find AI projects based on your skills and interests.</p>
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="🔍 Search Projects..."
        />

        <select>
          <option>All</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
      </div>

      <div className="project-grid">

        {projects.map((project) => (

          <div className="project-card" key={project.id}>

            <h2>{project.title}</h2>

            <p>
              <strong>Difficulty:</strong> {project.difficulty}
            </p>

            <p>
              <strong>Duration:</strong> {project.duration}
            </p>

            <p>
              <strong>Skills:</strong> {project.skills}
            </p>

            <button>Start Project</button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ProjectRecommendation;