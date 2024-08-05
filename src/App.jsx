import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Dashboard from "./components/dashboard/Dashboard"
import HomeHeader from "./components/home/HomeHeader"
import DashboardHeader from "./components/dashboard/DashboardHeader"

function App() {
  const currentUser = false;
  return (
    <>
      {currentUser ? <DashboardHeader/> : <HomeHeader/>}
      <Routes>
        {currentUser && <Route path="/dashboard" element={<Dashboard />} />}
        {!currentUser && <Route path="/" element={<Home />} />}
        <Route path="*" element={ <Navigate to={!currentUser ? "/" : "/dashboard"} /> } />
      </Routes>
    </>
  )
}

export default App
