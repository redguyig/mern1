export default function ProgressBar({ tasks }) {
  // // Logic: Calculate percentage (e.g., 3 out of 6 is 50%)
  // const progress = (count / 6) * 100;
const totalTasks = tasks.length;
const completedCount = tasks.filter(t=>t.isDone).length
const progress = totalTasks > 0 ? (completedCount / totalTasks) * 100 : 0;

  return (
    <div style={{ width: '100%', backgroundColor: '#333', borderRadius: '10px', height: '20px', margin: '20px 0' }}>
      <div 
        style={{ 
          width: `${progress > 100 ? 100 : progress}%`, 
          backgroundColor: '#4CAF50', 
          height: '100%', 
          borderRadius: '10px',
          transition: 'width 0.5s ease-in-out' // Makes it smooth
        }} 
      />
    </div>
  );
}



