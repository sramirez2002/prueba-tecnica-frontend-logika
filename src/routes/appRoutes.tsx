import { Routes, Route } from "react-router-dom"
import {Login} from "../pages/Login"
import {Dashboard} from "../pages/Dashboard"

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}


