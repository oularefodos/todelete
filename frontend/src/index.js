import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './Components/Nav';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Dashboard from './Pages/Dashboard';
import Service from './Pages/Service_locaux';
import Archive from './Pages/Archive';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Nav/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
      <Routes>
        <Route path="/service" element={<Service/>}></Route>
      </Routes>
      <Routes>
        <Route path="/archives" element={<Archive/>}></Route>
      </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
