import React from 'react';
import './App.css';
import Manager from './features/product/Manager';
import { Route, Router, Routes } from 'react-router-dom';
import Add from './features/product/Add';
import Update from './features/product/Update';

function App() {
  return (
 
            <Routes>
               
              <Route path='manager' element={<Manager/>}/>
              <Route path='add' element={<Add/>}/>
              <Route path=':id/update' element={<Update/>}/>

      
            </Routes>
  )
}

export default App;
