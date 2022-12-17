import React from "react";
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Landing from './Landing';
import PostView from './Postview';
import Postpage from "./Postpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/Postview' element={<PostView/>}/>
          <Route path='/Postpage' element={<Postpage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;