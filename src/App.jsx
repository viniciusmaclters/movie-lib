import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export function App() {
  return (
    <div>
      <Navbar />
      <h1>Movies Lab</h1>
      <Outlet />
    </div>
  )
}

