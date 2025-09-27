import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Login from "./Login/Login";
import { ToastContainer } from 'react-toastify';

export const Backendurl = "http://localhost:4000";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'||""));

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className='app-container'>
      <ToastContainer />
      {
        token === "" ? (
          <Login setToken={setToken} />
        ) : (
          <>
            <hr className="app-divider" />
            <div className="app_content">
              <Sidebar setToken={setToken}/>
              <div className="page-content">
                <Routes>
                  <Route path="/add" element={<Add token={token} />} />
                  <Route path="/list" element={<List token={token}/>} />
                </Routes>
              </div>
            </div>
          </>
        )
      }
    </div>
  );
};

export default App;