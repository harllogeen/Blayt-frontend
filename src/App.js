
import './App.css';
import { Routes, Route } from 'react-router-dom';

import { useEffect, useState } from 'react';

import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Service from './Components/Service';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard'
import Logout from './Components/Logout';
import ToggleMenu from './Components/ToggleMenu';
import Frontend from './Pages/Frontend/Frontend';
import Backend from './Pages/Backend/Backend';
import Design from './Pages/Design/Design';
import FullStack from './Pages/FullStack/FullStack';








function App() {


  //check if User is Logged In
  const[auth, setauth] = useState(false);
  const[auth1, setauth1] = useState(true);


  const isLoggedIn =async () => {
    try {
      const res = await fetch('/auth', {
        method : "GET",
        headers : {
          Accept : "Application/json",
          "Content-Type" : "application/json"

        },
        credentials : "include"
      });

      if(res.status === 200){
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth1(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn()
  }, [])
  
  
  return (
     
    <>
      <Navbar auth={auth1}/>
      <ToggleMenu auth={auth1}/>
      
      
      
      <Routes>
       <Route exact path="/" element={<Home />} auth={auth1}/>
        <Route exact path="/about" element={<About />} auth={auth1}/>
        <Route exact path="/service" element={<Service />} auth={auth1}/>
        <Route exact path="/contact" element={<Contact />} auth={auth1}/>
        <Route exact path="/login" element={<Login />} auth={auth1} />
        <Route exact path="/register" element={<Register />} auth={auth1} />
        <Route path="/backend" exact  element={<Backend />} />
        <Route exact path="/dashboard" element={<Dashboard />}  auth={auth} />
        <Route exact path="/logout" element={<Logout />}  auth={auth}/>
        <Route exact path="/design" element= {<Design />} />
        <Route exact path="/frontend" element= {<Frontend />} />
        <Route exact path="/fullstack" element= {<FullStack />} />
      </Routes>
     
      <Footer />
    </>

  );
}

export default App;

//Now we have to procted out Route List Without Login
//you can not go to Dashboard
//And After login you can not login again
//we need protected Routes
