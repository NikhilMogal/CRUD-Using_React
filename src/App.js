
import React from 'react';
import './App.css';
import Create from './components/create/Create';
import Read from './components/read/Read';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Update from './components/update/Update';


function App() {
  return (
    
     <div className='main'>
      <Router>

        <Routes>

          <Route  exact path="/" Component={Create} />
          <Route exact path="/read" Component={Read} />
          <Route path="/update" Component={Update} />
          

        </Routes>
      
      </Router>
      </div>
    

  )
}

export default App;
