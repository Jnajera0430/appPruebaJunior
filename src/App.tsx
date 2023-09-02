import './App.css'
import { Routes, Route } from 'react-router-dom';
import Login from './login/Login';
import { useAppSelector } from './app/hooks';
import Navigation from './components/Navbar';
import { Stack } from '@mui/material';
import { RouteProtectedLogin } from './verifyUser/RouteProtectedLogin';
import { RouteProtected } from './verifyUser/RouteProtected';

function App() {

  const user = useAppSelector((state) => state.stateUser);
  console.log(user);

  return (
    <>
      {user ? <Navigation /> : ""} 
      
      <Stack sx={{width:'90vw', height: '80vh'}}>
        <Routes>
          <Route
              element={
                <RouteProtectedLogin
                  isAllowed={!!user}
                  redirectTo={
                    user? "/home":"/" 
                  }
                />
              }
            >
            <Route index path='/' element={<Login />} />
          </Route>
          <Route
            element={
              <RouteProtected
              isAllowed={
                !!user
              }
              redirectTo="/"
              />
            }
          >
            <Route index path='/home' element={<></>} />
          </Route>
        </Routes>
      </Stack>
    </>
  )
}

export default App
