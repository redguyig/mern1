function Details({ isUnlocked }) {
  // 1. "Guard Clause": If it's not unlocked, show nothing
  if (!isUnlocked) {
    return null;
  }

  // 2. If it is unlocked, show the roadmap
  return (
    <div className="details-card" style={{ marginTop: '20px', padding: '15px', border: '1px solid #646cff' }}>
      <h3>🚀 2026 Roadmap Milestones</h3>
      <ul>
        <li>Master React Components & Props</li>
        <li>Build a Node.js / Express Backend</li>
        <li>Connect MongoDB Database</li>
        <li>Deploy your first Full-Stack App</li>
      </ul>
    </div>
  );
}

export default Details;