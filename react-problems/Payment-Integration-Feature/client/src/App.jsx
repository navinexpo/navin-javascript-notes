import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignUp/>} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
        <PrivateRoute />
    </Router>
  )
}

export default App
