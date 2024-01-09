import React from "react";
import Navbar from "./components/Navbar";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  var a = 121
  return (
    <div>
      <Navbar />
      <button onClick={() => navigate(`/setting/child1/${a}`)}>Cài đặt</button>
    </div>
  );
};
export default App;