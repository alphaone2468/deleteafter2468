import React from 'react';
import { Link,Route,Routes,BrowserRouter } from 'react-router-dom';
import './App.css';
import Notfound from './components/Notfound';
import Go from './components/Go';

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/go' element={<Go/>}></Route>
          <Route path='/go1' element={<h1>hello qefwegfworld</h1>}></Route>
          <Route path='/go2' element={<h1>hello wegwegwgwrworld</h1>}></Route>
          <Route path="*" element={<Notfound/>}></Route>
        </Routes>
      
      </BrowserRouter>
 
    </div>
  );
}

export default App;
