import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEdit from "./pages/AddEdit";
import Home from "./pages/Home";
import Insert from "./pages/Insert";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
          

          <BrowserRouter>

		  <Routes>
		  
			<Route path="/data/home" element={<Home />} />
      <Route path="/data/Insert" element={<Insert/>}/>
      <Route path="/data/add" element={<AddEdit/>}></Route>
		 </Routes>
		</BrowserRouter>

    </div>
  );
}

export default App;
