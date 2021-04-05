import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap"
import Navbar from './Navbar';

const App = () => {
    return (
        <>
            <div className="container-fluid nav bg">
                <div className='row'>
                    <div className='col-10 mx-auto'>

                 
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/service" component={Service} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/"/>
                <Home/>
            </Switch>
        </div>
        </div>
        </div>
        </>
    );
};

export default App;