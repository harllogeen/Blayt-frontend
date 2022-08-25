import React from 'react'
import { Redirect, Route, Router } from 'react-router'
import Dashboard from './Components/Dashboard'


const Protectedroute = ({ auth, component: Component, ...rest }) => {
  return (

    
       <Route {...rest} render={(props)=>{
            if(auth) return <Component {...props} />
            if(!auth) return <Redirect to={{path: "/dashboard", state : {from : routeprops.location}}} />
        }} /> 

    
  )
}

export default Protectedroute