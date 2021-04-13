import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import AppointmentPage from './components/Appointment/AppointmentPage/AppointmentPage';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import { createContext, useState } from 'react';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AllPatients from './components/DashBoard/AllPatients/AllPatients';
import AddDoctor from './components/AddDoctor/AddDoctor';

export const GlobalContext = createContext({});

function App() {
  const [signedInUser, setsignedInUser] = useState({});
  return (
    <GlobalContext.Provider value={{ signedInUser, setsignedInUser }}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <PrivateRoute path='/appointment'>
            <AppointmentPage />
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <DashBoard />
          </PrivateRoute>
          <PrivateRoute path='/appointments'>
            <AllPatients />
          </PrivateRoute>
          <PrivateRoute path='/addDoctor'>
            <AddDoctor />
          </PrivateRoute>
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </GlobalContext.Provider>
  );
}

export default App;
