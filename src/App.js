import './App.css';
import {useSelector} from "react-redux"
import TasksForm from './app/components/TasksForm';
import TasksList from './app/components/TasksList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TasksList/>} />
          <Route path='/create-task' element={<TasksForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
