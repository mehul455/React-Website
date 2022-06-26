import React from 'react'
import {Switch,Route} from "react-router-dom"
import Home  from '../layout/Home';
import About from '../pages/About'
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Navbar from '../navbar/Navbar'
import Error404 from '../pages/Error404'
import Projeactscard from '../pages/Projeactscard';
import Project1 from '../FreeprojectCard/Project1';
const Default = () => {
    return (
        <>
          <Navbar/>
    <Switch>
         <Route exact path="/about" component={About}/>
         <Route exact path="/services" component={Services}/>
         <Route exact path="/contact" component={Contact}/>
         <Route exact path="/free" component={Project1}/>
         <Route exact path="/" component={Home}/>
         <Route exact path="/projects" component={Projeactscard}/>
         <Route exact path="*" component={Error404} />
     </Switch> 
        </>
    )
}

export default Default
