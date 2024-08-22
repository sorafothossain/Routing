import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Projects from '../pages/Projects';
import Tasks from '../pages/Tasks';
import Settings from '../pages/Settings';
import Help from '../pages/Help';


const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/tasks" element={<Tasks />}/>
            <Route path="/settings" element={<Settings />}/>
            <Route path="/help" element={<Help />}/>
        </Routes>
    </div>
  );
};

export default AppRoutes;