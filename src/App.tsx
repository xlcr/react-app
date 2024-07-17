import './App.css';
import { Routes, Route, Link, Outlet, BrowserRouter, Navigate } from 'react-router-dom';

import CommonComponents from './CommonComponents/CommonComponents'
import Login from './auth/Login'
import ProtectedRoute from './auth/ProtectedRoute'
import Dashboard from './dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={false ? <Navigate to="/dashboard" replace /> : <Login />}/>
          <Route path="/login" element={<Login />}/>
          <Route element={<ProtectedRoute/>}>
            <Route path="/" element={<CommonComponents isLoggedIn={false} />}>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/settings" element={<div>Settings.</div>}/>
            </Route>
          </Route>
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
