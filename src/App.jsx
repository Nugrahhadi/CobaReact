import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmartParkingApp from './components/mobile/SmartParkingApp';
import ParkingDetailScreen from './components/mobile/ParkingDetailScreen';
import ParkingReservationScreen from './components/mobile/ParkingReservationScreen';
import LoginRegisterScreen from './components/mobile/LoginRegisterScreen';
import AdminDashboard from './components/admin/AdminDashboard';
import SensorMonitoringScreen from './components/admin/SensorMonitoringScreen';
import AdminUserManagement from './components/admin/AdminUserManagement';
import AdminSystemConfig from './components/admin/AdminSystemConfig';
import AdminReports from './components/admin/AdminReports';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<LoginRegisterScreen />} />
        
        {/* Mobile Routes */}
        <Route path="/mobile" element={<SmartParkingApp />} />
        <Route path="/mobile/parking/:id" element={<ParkingDetailScreen />} />
        <Route path="/mobile/reserve/:id" element={<ParkingReservationScreen />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/sensors" element={<SensorMonitoringScreen />} />
        <Route path="/admin/users" element={<AdminUserManagement />} />
        <Route path="/admin/config" element={<AdminSystemConfig />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        
        {/* Default redirect to login */}
        <Route path="/" element={<LoginRegisterScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
