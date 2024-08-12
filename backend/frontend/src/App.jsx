import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Layout from './pages/Layout';
import About from './components/About';
import Posts from './pages/Posts/Posts';
import Register from './pages/Users/Register';
import Login from './pages/Users/Login';
import Dashboard from './pages/Users/Dashboard';
import CreatePost from './pages/Posts/CreatePost';
import Update from './pages/Posts/Update';
import AuthRoutes from './routes/AuthRoutes';
import GuestRoutes from './routes/GuestRoutes';

function App() {

  return (
    <BrowserRouter>
        <Routes>

          <Route path = '/' element = {<Layout/>}>

              <Route path = '' element = {<Home/>} />
              <Route path = 'about' element = {<About/>} />
              {/* <Route path = 'contact' element = {<Contact/>} /> */}
              <Route path = 'posts' element = {<Posts/>} />

              <Route element = {<GuestRoutes/>}>
                  <Route path = 'register' element = {<Register/>} />
                  <Route path = 'login' element = {<Login/>} />
              </Route>

              <Route element = {<AuthRoutes/>}>
                  <Route path = 'dashboard' element = {<Dashboard/>}/>
                  <Route path = 'create' element = {<CreatePost/>}/>
                  <Route path = 'update' element = {<Update/>}/>
              </Route>

          </Route>

        </Routes>
    </BrowserRouter>
  )
}

export default App
