import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchFunctionality from './components/SearchFunctionality'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<SearchFunctionality/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
