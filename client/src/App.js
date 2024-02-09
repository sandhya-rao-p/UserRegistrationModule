import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

// Home component for the landing page
function Home() {
  return (
    <div>
      <h2>Welcome to the User Registration and Login System</h2>
      <div className="auth-buttons">
        <Link to="/signup" className="btn btn-signup">Sign Up</Link>
        <Link to="/login" className="btn btn-login">Login</Link>
      </div>
    </div>
  );
}

export default App;
