import "./App.css";
import TaskForm from "./components/tasks/TaskForm";
import TaskList from "./components/tasks/TaskList";

function App() {
  return (
    <div className='App'>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
