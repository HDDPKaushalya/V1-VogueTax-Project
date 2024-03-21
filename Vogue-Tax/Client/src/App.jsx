import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage';
import SideNavigBar from './components/SideNavigBar/SideNavigBar'
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          
          <Route path='/home' element={
            <div className="DashBoardPage">
              <SideNavigBar/>
              <div className='dash-view'>
                <Home/>
              </div>
            </div>
          }/>
          <Route path='/projects' element={
            <div className="DashBoardPage">
              <SideNavigBar/>
              <div className='dash-view'>
                <Projects/>
              </div>
            </div>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
