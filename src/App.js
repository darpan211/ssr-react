import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import UserDetails from "./UserDetails";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </>
  );
}

export default App;
