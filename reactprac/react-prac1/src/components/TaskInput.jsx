import { useState } from 'react';

export default function TaskInput({ onAddTask }) {
  // This state is LOCAL—it only lives inside this input box
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Stops the page from refreshing (Standard JS)
    
    if (inputText.trim() === "") return; // Don't add empty tasks

    onAddTask(inputText); // Send the text up to App.jsx
    setInputText("");     // Clear the box for the next task
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
      <input 
        type="text" 
        placeholder="Add a custom roadmap goal..." 
        value={inputText} 
        onChange={(e) => setInputText(e.target.value)} // React "owns" the typing
        style={{ 
          padding: '12px', 
          width: '70%', 
          borderRadius: '5px', 
          border: '1px solid #ccc',
          fontSize: '16px' 
        }}
      />
      <button type="submit" style={{ padding: '12px 20px', marginLeft: '10px' }}>
        Add Goal
      </button>
    </form>
  );
}