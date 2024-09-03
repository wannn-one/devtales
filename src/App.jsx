import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Dashboard from "./components/dashboard/Dashboard"
import HomeHeader from "./components/home/HomeHeader"
import DashboardHeader from "./components/dashboard/header/DashboardHeader"
import { Blog } from "./context/Context"
import { ToastContainer } from "react-toastify"
import Profile from "./components/dashboard/profile/Profile"

function App() {
  const { currentUser } = Blog();
  return (
    <>
      {currentUser ? <DashboardHeader/> : <HomeHeader/>}
      <ToastContainer />
      <Routes>
        {currentUser && <Route path="/dashboard" element={<Dashboard />} />}
        {!currentUser && <Route path="/" element={<Home />} />}
        <Route path="*" element={ <Navigate to={!currentUser ? "/" : "/dashboard"} /> } />
        <Route path="/profile/:userId" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
