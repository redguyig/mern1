export default function TaskList({ tasks, onIncrement, onDelete }) {
  // Logic: Find the first task that isn't done yet
  const currentGoal = tasks.find((t) => !t.isDone);

  return (
    <div style={{ textAlign: "left" }}>
      {/* --- SECTION 1: THE FOCUS CARD --- */}
      <div style={{ background: "rgba(0,0,0,0.2)", padding: "20px", borderRadius: "10px", marginBottom: "20px" }}>
        <small style={{ color: "var(--accent)" }}>Next Step:</small>
        <h2 style={{ margin: "10px 0" }}>
          {currentGoal ? currentGoal.title : "All Milestones Reached! 🚀"}
        </h2>
        {/* If there is a current goal, show the button. Otherwise, hide it. */}
        {currentGoal && (
          <button onClick={onIncrement} style={{ width: "100%", padding: "12px" }}>
            Mark as Completed
          </button>
        )}
      </div>

      {/* --- SECTION 2: THE LIST --- */}
      <h3 style={{ fontSize: "1rem", color: "var(--text-secondary)" }}>Roadmap Details</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            padding: "10px 0", 
            borderBottom: "1px solid rgba(255,255,255,0.1)" 
          }}>
            <span style={{ 
              textDecoration: task.isDone ? "line-through" : "none",
              color: task.isDone ? "var(--text-secondary)" : "var(--text-primary)"
            }}>
              {task.isDone ? "✅ " : "⏳ "}{task.title}
            </span>
            <button 
              className="delete-btn" 
              onClick={() => onDelete(task.id)}
              style={{ backgroundColor: "var(--delete-bg)", color: "var(--delete-text)", padding: "5px 10px", borderRadius: "5px", border: "none" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}