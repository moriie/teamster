import React, { Fragment, useState, useReducer, useContext } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Login from './components/login'
import Signup from './components/signup'
import Home from './components/home'

import './App.css';

export const AuthUser = React.createContext([{}, ()=>{}])

export function App() {
  
  const [credentials, setCredentials] = useState({})
  const [formSelector, setForm] = useState('')

  const handleClick = (e) => {
    setForm(e.target.name)
  }

  const displaySelector = () => {
    switch (formSelector){
      case 'login':
        return < Login />
      break;
      case 'signup':
        return < Signup />
      break;
      default: 
        return <div className='splash'>
          <img src='http://hashtag-bg.com/wp-content/uploads/2018/08/berlin-background-resume-wallpapers-backgrounds.jpg' className='bg' alt=''/>
          <div className='blur-box'>
            {/* <button name='login' onClick={handleClick}>Login</button> */}
            {/* <button name='signup' onClick={handleClick}>Signup</button> */}
            < NavLink to='/login'>Login</ NavLink>
            < NavLink to='/signup'>Signup</ NavLink>
          </div>
        </div>
    }
  }

  return (
    <div className="App">
    <AuthUser.Provider value={[credentials, setCredentials]}>
      <Router>
        <Fragment>
          {displaySelector()}
          {/* <Route exact path='/' component={Home} /> */}
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
        </Fragment>
      </Router>
    </AuthUser.Provider>
    </div>
  );
}




// import rootReducer from './reducers/rootreducer'


  // const [selection, setSelection] = useState(true)

  // Remove hook and use store/redux?
  //https://auth0.com/blog/handling-authentication-in-react-with-context-and-hooks/

  // const changeView = () => {
  //   setView(!view)
  // }

  // const handleDisplay = () => {
  //   if (selection){
  //     return <div>
  //       <button name='login' onClick={handleClick}>Login</button>
  //       <button name='signup' onClick={handleClick}>Signup</button>
  //       </div>
  //   }
  //   else{
  //     return null
  //   }
  // }