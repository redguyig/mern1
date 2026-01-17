import { useState } from 'react';

export default function TaskInput({ onAddTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '2rem' }}>
      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new goal..."
        style={{ flex: 1, padding: '0.8rem', borderRadius: '0.5rem', background: '#334155', border: 'none', color: 'white' }}
      />
      <button type="submit">Add</button>
    </form>
  );
}