import './App.css'
import {Routes, Route} from 'react-router-dom';
import Login from './login/Login';

function App() {
  
  return (
    <>
        <Routes>
          <Route index path='/' element={<Login/>}/>
          <Route index path='/home' element={<></>}/>
        </Routes>
    </>
  )
}

export default App
