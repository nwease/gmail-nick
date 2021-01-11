import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
    return (
        <Router>
            <div className='app'>
                <Header />

                <SideBar />

                {/*<Switch>*/}
                {/*    <Route path='/'>*/}
                {/*       <h1>*/}
                {/*           TEST*/}
                {/*       </h1>*/}
                {/*    </Route>*/}
                {/*</Switch>*/}
            </div>
        </Router>
    );
}

export default App;
