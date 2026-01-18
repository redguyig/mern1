import { useParams, useNavigate } from 'react-router-dom';



function Details({ tasks }) {
  const { taskId } = useParams();
  const navigate = useNavigate();

  // Find the specific task based on the ID in the URL
  const task = tasks.find(t => t.id.toString() === taskId);

  if (!task) return <div className="glass-card">Task not found!</div>;

  return (
    <>
      <button className="back-btn" onClick={() => navigate('/')}>← Back to Roadmap</button>
      <h2>{task.title}</h2>
      <div className="status-badge">
        Status: {task.isDone ? "✅ Completed" : "⏳ In Progress"}
      </div>
      <p className="description-text">
        {task.description || "No additional details provided for this milestone yet."}
      </p>
    </>
  );
}

export default Details;
