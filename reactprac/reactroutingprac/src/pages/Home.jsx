import { useState } from 'react';
import TaskInput from '../components/TaskInput';
import ProgressBar from '../components/ProgressBar';
import TaskList from '../components/TaskList';
import { DEFAULT_TASKS } from '../data/defaultTasks.js';
function Home({ tasks, setTasks }) {
  const [searchQuery, setSearchQuery] = useState("");
  // At the top of Home.jsx

  
  const addTask = (title,description) => {
    setTasks([...tasks, { id: Date.now(), title, isDone: false, description }]);
  };

  const handleIncrement = () => {
    const next = tasks.find(t => !t.isDone);
    if (next) {
      setTasks(tasks.map(t => t.id === next.id ? { ...t, isDone: true } : t));
    }
  };
  const handleReset = () => {
  if (window.confirm("Are you sure you want to reset your roadmap?")) {
    setTasks(DEFAULT_TASKS); // Make sure DEFAULT_TASKS is defined/imported
    localStorage.setItem('v2_tasks', JSON.stringify(DEFAULT_TASKS)); // Update localStorage as well
  }
};  

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter((task) => 
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <h1>Uni Roadmap v2</h1>
    <TaskInput onAddTask={addTask} />
    <input 
      className="search-bar"
      placeholder="Search milestones..." 
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <TaskList 
      tasks={filteredTasks} 
      onIncrement={handleIncrement} 
      onDelete={deleteTask} 
    />
    <button className="reset-btn" onClick={handleReset}>
      Reset list
    </button>
  </>
  );
  
}

export default Home;
