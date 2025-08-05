
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from './getuser/User';
import EditUser from './getuser/EditUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </Router>
  );
}

export default App;
