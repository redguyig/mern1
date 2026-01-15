// import { useState, useEffect } from 'react'
// import Details from './components/Details.jsx'
// import Counter from './components/Counter.jsx'
// import ProgressBar from './components/ProgressBar.jsx'
// function App() {
//   // --- STATE ---
//   const [showDetails, setShowDetails] = useState(() => {
//     const saved = localStorage.getItem('detailsVisible');
//     return saved === 'true'; 
//   });

//   // const [count, setCount] = useState(() => {
//   //   const saved = localStorage.getItem('userCount');
//   //   return saved !== null ? parseInt(saved) : 0;
//   // });
//   // 1. Define your roadmap data
// const [tasks, setTasks] = useState([
//   { id: 1, title: "Master React Hooks", isDone: false },
//   { id: 2, title: "Build Express Server", isDone: false },
//   { id: 3, title: "Database Schema Design", isDone: false },
//   { id: 4, title: "Authentication (JWT)", isDone: false },
//   { id: 5, title: "API Deployment", isDone: false },
//   { id: 6, title: "Final Portfolio Project", isDone: false },
// ]);

//   // --- PERSISTENCE (useEffect) ---
//   // useEffect(() => {
//   //   localStorage.setItem('userCount', count);
//   //   localStorage.setItem('detailsVisible', showDetails);
//   // }, [count, showDetails]);
//   useEffect(() => {
//   // We use JSON.stringify because localStorage only accepts strings
//   localStorage.setItem('userTasks', JSON.stringify(tasks));
//   localStorage.setItem('detailsVisible', showDetails);
// }, [tasks, showDetails]); // Re-run whenever the tasks array changes
//   // --- LOGIC HANDLERS ---
//   // const handleIncrement = () => {
//   //   if (count < 6) {
//   //     setCount(prev => prev + 1);
//   //   }
//   //   // Logic: Once we hit the threshold, unlock the roadmap
//   //   if (count >= 5) {
//   //     setShowDetails(true);
//   //   }
//   // };
//   const handleIncrement = () => {
//   // Find the first task that isn't done yet
//   const nextTaskId = tasks.find(t => !t.isDone)?.id;

//   if (nextTaskId) {
//     // Update the array: Keep everything the same, but flip the isDone of the target task
//     const updatedTasks = tasks.map(t => 
//       t.id === nextTaskId ? { ...t, isDone: true } : t
//     );
    
//     setTasks(updatedTasks);

//     // If we just finished the 6th task, show details
//     if (nextTaskId === 6) {
//       setShowDetails(true);
//     }
//   }
// };

//   // const handleReset = () => {
//   //   setCount(0);
//   //   setShowDetails(false);
//   // };
//   const handleReset = () => {
//   // Reset the array back to all 'false'
//   const resetTasks = tasks.map(t => ({ ...t, isDone: false }));
//   setTasks(resetTasks);
//   setShowDetails(false);
  
//   // Optional: Clear local storage specifically
//   localStorage.removeItem('userTasks');
// };
// // This "derives" the number from your array every time the component renders
// const completedCount = tasks.filter(task => task.isDone).length;
//   // --- UI RENDER ---
//   return (
//     // <div className="app-container">
//     //   <h1>University Roadmap 2026</h1>

//     //   <ProgressBar count={count} /> {/* New worker using the same data */}
      
//     //   <Counter count={count} onIncrement={handleIncrement} />
      
//     //   <Details isUnlocked={showDetails} />

//     //   <div style={{ marginTop: '20px' }}>
//     //     <button onClick={handleReset} className="reset-btn">
//     //       Reset Progress
//     //     </button>
//     //   </div>
//     // </div>
//     <>
//      <h1>University Roadmap 2026</h1>
//     <ProgressBar count={completedCount} />
    
//     {/* Pass the tasks array so the counter knows what to display */}
//     <Counter 
//       count={completedCount} 
//       currentTask={tasks.find(t => !t.isDone)?.title || "All Done!"} 
//       onIncrement={handleIncrement} 
//     />

//     <Details isUnlocked={showDetails} />
//   </>
//   );
// }

// export default App;
import { useState, useEffect } from 'react'
import Details from './components/Details.jsx'
import Counter from './components/Counter.jsx'
import ProgressBar from './components/ProgressBar.jsx'
import TaskInput from './components/TaskInput.jsx'

function App() {
  // 1. STATE INITIALIZATION (The "Lazy Initializer" pattern)
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('userTasks');
    if (savedTasks !== null) {
      return JSON.parse(savedTasks); // Convert string back to Array
    } else {
      // Default roadmap data
      return [
        { id: 1, title: "Master React Hooks", isDone: false },
        { id: 2, title: "Build Express Server", isDone: false },
        { id: 3, title: "Database Schema Design", isDone: false },
        { id: 4, title: "Authentication (JWT)", isDone: false },
        { id: 5, title: "API Deployment", isDone: false },
        { id: 6, title: "Final Portfolio Project", isDone: false },
      ];
    }
  });

  const [showDetails, setShowDetails] = useState(() => {
    const savedVisibility = localStorage.getItem('detailsVisible');
    return savedVisibility === 'true';
  });

  // 2. PERSISTENCE (Syncing to LocalStorage)
  useEffect(() => {
    localStorage.setItem('userTasks', JSON.stringify(tasks));
    localStorage.setItem('detailsVisible', showDetails);
  }, [tasks, showDetails]);

  // 3. DERIVED DATA (Calculated on every render)
  const completedCount = tasks.filter(t => t.isDone).length;
  const currentTask = tasks.find(t => !t.isDone);
  const currentTaskTitle = currentTask ? currentTask.title : "Roadmap Completed! 🏆";

  // 4. LOGIC HANDLERS
  const handleIncrement = () => {
    
    // if (currentTask) {
    //   // Create new array with the current task marked as done
    //   const updatedTasks = tasks.map(t => 
    //     t.id === currentTask.id ? { ...t, isDone: true } : t
    //   );
    //   setTasks(updatedTasks);

    //   // If we just finished the very last task (ID 6), unlock details
    //   if (currentTask.id === 6) {
    //     setShowDetails(true);
    //   }
    // } // this was all old logic 
    const nextTask = tasks.find(t => !t.isDone);
    if (nextTask) {
    const updatedTasks = tasks.map(t => 
      t.id === nextTask.id ? { ...t, isDone: true } : t
    );
    
    setTasks(updatedTasks);

    // ✅ THE DYNAMIC FIX: 
    // If the task we just finished is the very last one in our array...
    if (nextTask.id === tasks[tasks.length - 1].id) {
      setShowDetails(true);
    }
  }
  };
  const addTask = (title) => {
  const newTask = {
    id: Date.now(), // Unique ID for the key prop
    title: title,
    isDone: false
  };

  // Immutability: Create a new array with the new task at the end
  setTasks([...tasks, newTask]);
};  
  const handleReset = () => {
    const resetTasks = tasks.map(t => ({ ...t, isDone: false }));
    setTasks(resetTasks);
    setShowDetails(false);
    localStorage.removeItem('userTasks'); // Clear memory
  };
const onDelete = (idToDelete) => {
  // We filter the array: "Keep every task UNLESS its ID matches the one we want to delete"
  const remainingTasks = tasks.filter(task => task.id !== idToDelete);
  
  setTasks(remainingTasks);
};

  // 5. THE CLEAN RETURN
  return (
    <div className="app-container" style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>University Roadmap 2026</h1>
      
      {/* Visual Progress */}
      <ProgressBar tasks={tasks} />
      {/* 2. Pass the logic function as a prop */}
      <TaskInput onAddTask={addTask} />
      {/* Input / Control Section */}
      <Counter 
        tasks={tasks}
        currentTask={currentTaskTitle} 
        onIncrement={handleIncrement} 
        onDelete={onDelete}
      />

      {/* Conditional Content (The modularized version) */}
      <Details isUnlocked={showDetails} />

      {/* Global Reset */}
      <div style={{ marginTop: '30px' }}>
        <button onClick={handleReset} style={{ backgroundColor: '#ff4d4d', color: 'white' }}>
          Reset All Progress
        </button>
      </div>
    </div>
  );
}

export default App;