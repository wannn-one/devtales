import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Dashboard from "./components/dashboard/Dashboard"
import HomeHeader from "./components/home/HomeHeader"
import DashboardHeader from "./components/dashboard/DashboardHeader"

function App() {
  const auth = false;
  return (
    <>
      {auth ? <DashboardHeader/> : <HomeHeader/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
