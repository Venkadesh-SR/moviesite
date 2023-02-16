import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Home'
import Tamil from './Movie/Tamil'
import Telugu from './Movie/Telugu'
import Hindi from './Movie/Hindi'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
         <Route path = "/tamil" element={<Tamil/>}/>
          <Route path = "/telugu" element={<Telugu/>}/>
          <Route path = "/hindi" element={<Hindi/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;