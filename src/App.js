import React from 'react';

import SignUp from './SignUp';
import Login from './Login';
import File from './File';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={ <SignUp/>}></Route>
        <Route path='/file' element= {<File/>}></Route>
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;
