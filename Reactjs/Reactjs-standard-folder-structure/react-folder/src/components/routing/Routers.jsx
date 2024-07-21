import {Suspense, lazy} from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const Dashbaord = lazy(()=> import('../pages/Dashboard'));
const Login = lazy(()=> import('../pages/Login'));
const Signup = lazy(()=> import('../pages/Signup'))

const Routers = () => (
    <Router>
        <Suspense fallback = {<div> Loading..</div> } >
            <Routes>
                <Route exact path='/' element={<Dashbaord />} />
                <Route path='/login' element={<Login />}  />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </Suspense>
    </Router>
)

export default Routers
