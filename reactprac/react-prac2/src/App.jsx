import { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import ProgressBar from './components/ProgressBar';
import TaskList from './components/TaskList';
import './App.css';
import ThemeToggle from './components/ThemeToggle'; 

// The "Factory Reset" data
const DEFAULT_TASKS = [
  { id: 1, title: "Master React Hooks", isDone: false },
  { id: 2, title: "Build Express Server", isDone: false },
  { id: 3, title: "Database Schema Design", isDone: false }
];

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('v2_tasks');
    return saved ? JSON.parse(saved) : DEFAULT_TASKS;
  });
  
const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem('v2_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title, isDone: false }]);
  };

  const handleIncrement = () => {
    const next = tasks.find(t => !t.isDone);
    if (next) {
      setTasks(tasks.map(t => t.id === next.id ? { ...t, isDone: true } : t));
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  // --- THE RESET FUNCTION ---
  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset your roadmap?")) {
      setTasks(DEFAULT_TASKS);
    }
  };
  const [isDarkMode, setIsDarkMode] = useState(true);
  

  // LOGIC: This updates the "Real World" (HTML Body) whenever the React state changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }, [isDarkMode]);

  // App.jsx (inside the App function, before the return)
const filteredTasks = tasks.filter((task) => {
  // We check if the task title contains the search query
  // We use .toLowerCase() so that "MATH" and "math" both work
  return task.title.toLowerCase().includes(searchQuery.toLowerCase());
});

  return (
    <div className="app-wrapper">
      <div className="glass-card">
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Uni Roadmap v2</h1>
        
        <ProgressBar tasks={tasks} />
        
        <TaskInput onAddTask={addTask} />
        <input 
      type="text" 
      placeholder="Search milestones..." 
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      style={{ 
        width: '100%', 
        padding: '10px', 
        marginBottom: '20px', 
        borderRadius: '8px', 
        border: '1px solid var(--border-color)',
        background: 'rgba(0,0,0,0.1)',
        color: 'var(--text-main)'
      }}
    />
        
        <TaskList 
          tasks={filteredTasks} 
          onIncrement={handleIncrement} 
          onDelete={deleteTask} 
        />
        <ThemeToggle 
        isDark={isDarkMode} 
        onToggle={() => setIsDarkMode(!isDarkMode)} 
      />
      

        {/* --- THE RESET BUTTON --- */}
        <button className="reset-btn" onClick={handleReset}>
          Reset list  
        </button>
      </div>
    </div>
  );
}

export default App;