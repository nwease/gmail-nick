import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Mail from './components/Mail';
import EmailList from './components/EmailList';

function App() {
    return (
        <Router>
            <div className='app'>
                <Header />

                <div className='app__body'>
                    <SideBar />

                    <Switch>
                        <Route path='/mail'>
                            <Mail />
                        </Route>

                        <Route path='/'>
                            <EmailList />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
