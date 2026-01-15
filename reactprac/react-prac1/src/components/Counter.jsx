// // 1. We define the component and "destructure" the props inside the parentheses
// export default function Counter({ count, onIncrement }) {
  
//   return (
//     <div className="counter-card" style={{ textAlign: 'center', margin: '20px' }}>
      
//       {/* Displaying the state passed down fr   om App.jsx */}
//       <h2>Current Progress: {count}</h2>
      
//       {/* Progress Bar (Visual representation) */}
//       {/* <div style={{ background: '#eee', width: '100%', height: '10px', borderRadius: '5px' }}>
//         <div style={{ 
//           background: '#646cff', 
//           width: `${(count / 6) * 100}%`, 
//           height: '100%', 
//           transition: 'width 0.3s ease' 
//         }}></div>
//       </div> */} 
//       {/* we now have a progress bar as a seperate component*/}

//       {/* This button calls the function that lives in App.jsx */}
//       <button 
//         onClick={onIncrement}
//         style={{ marginTop: '15px' }}
//       >
//         {count >= 6 ? "All Tasks Completed!" : "Log Study Hour"}
//       </button>
      
//     </div>
//   );
// }

//the version below gives misletones as counter 
// export default function Counter({ tasks, onIncrement }) {
//   return (
//     <div className="counter-card">
//       <h2>Your Roadmap Progress</h2>
      
//       {/* THE MAPPING LOGIC: This renders one <li> for every object in your array */}
//       <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
//         {tasks.map((task) => (
//           <li key={task.id} style={{ 
//             margin: '10px 0',
//             textDecoration: task.isDone ? 'line-through' : 'none',
//             color: task.isDone ? '#888' : '#fff',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '10px'
//           }}>
//             <span>{task.isDone ? "✅" : "⏳"}</span>
//             {task.title}
//           </li>
//         ))}
//       </ul>

//       <button 
//         onClick={onIncrement} 
//         style={{ marginTop: '20px', width: '100%' }}
//         disabled={tasks.every(t => t.isDone)} // Disable when 100% complete
//       >
//         {tasks.every(t => t.isDone) ? "All Goals Reached! 🚀" : "Complete Next Goal"}
//       </button>
//     </div>
//   );
// }
// 1. Add 'onDelete' to your props
// export default function Counter({ tasks, onIncrement, onDelete }) {
//   return (
//     <div className="counter-card">
//       <ul style={{ listStyle: 'none', padding: 0 }}>
//         {tasks.map((task) => (
//           <li key={task.id} style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
//             <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
//               {task.title}
//             </span>
            
//             {/* 2. The Delete Button */}
//             <button 
//               onClick={() => onDelete(task.id)} 
//               style={{ backgroundColor: '#ff4d4d', padding: '2px 8px', fontSize: '12px' }}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//       {/* ... rest of your code */}
//     </div>
//   );
// }
export default function Counter({ tasks, onIncrement, onDelete }) {
  // 1. Find the specific goal the user should focus on right now
  const currentGoal = tasks.find(t => !t.isDone);

  return (
    <div className="counter-card" style={{ textAlign: 'left', border: '1px solid #444', padding: '20px', borderRadius: '10px' }}>
      
      {/* SECTION 1: THE ACTIVE GOAL (What you lost) */}
      <div style={{ marginBottom: '20px', borderBottom: '1px solid #555', paddingBottom: '10px' }}>
        <p style={{ color: '#888', margin: 0 }}>Current Focus:</p>
        <h2 style={{ color: '#646cff', margin: '5px 0' }}>
          {currentGoal ? currentGoal.title : "All Goals Completed! 🏆"}
        </h2>
        <button 
          onClick={onIncrement} 
          disabled={!currentGoal}
          style={{ width: '100%', padding: '10px', cursor: 'pointer' }}
        >
          Mark as Done
        </button>
      </div>

      {/* SECTION 2: THE CHECKLIST (The milestones) */}
      <h4 style={{ marginBottom: '10px' }}>Roadmap Checklist</h4>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '8px 0',
            borderBottom: '1px shadow #333'
          }}>
            <span style={{ 
              textDecoration: task.isDone ? 'line-through' : 'none',
              color: task.isDone ? '#666' : '#fff'
            }}>
              {task.isDone ? "✅" : "⏳"} {task.title}
            </span>
            
            {/* The Delete Button */}
            <button 
              onClick={() => onDelete(task.id)} 
              style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}