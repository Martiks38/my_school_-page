import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Apployout from 'Layout/Apployout'

function App() {
  return (
    <>
      <Router>
        <Apployout />
        {/* <Routes>
          <Route path="/" element={<p>Hi</p>} />
        </Routes> */}
      </Router>
    </>
  )
}

export default App
