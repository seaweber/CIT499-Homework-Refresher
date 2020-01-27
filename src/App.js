import React from 'react';
import './App.css';
import List from './components/List';
import ItemPage from './components/ItemPage'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

function App() {

    const items = [
        { name: 'Trogdor', color: 'green', text: 'Was a man, or maybe a dragon man, or just a dragon?' },
        { name: 'S is for sucks', color: 'orange', text: 'Sorry Mr. Trogdor, you\'ve run out of luck' },
        { name: 'Strongbad', color: 'red', text: 'THE CHEAT IS NOT DEAD'}
    ];

    return (
        <div className="App">

            <Router basename={ process.env.PUBLIC_URL }>
                <Switch>

                    <Route path={ process.env.PUBLIC_URL } exact component={(props) => <List {...props} items={items}/> }/>
                    <Route path={ process.env.PUBLIC_URL + "/item/:id" } component={(props) => <ItemPage {...props} items={items}/> }/>

                </Switch>
            </Router>

        </div>
    );
}

export default App;
