import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Main from './components/_shared/Main'
import Home from './components/Home'
import Contato from './components/Contato'

class App extends Component {
    render() {
        return (
            <Main>
                <Route exact path="/" component={Home} />
                <Route path="/Contato" component={Contato} />                
            </Main>
        )
    }
}

/*class App extends Component {
    render() {
        return (
            <Router history={BrowserHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Home} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/login" component={LoginPage} />
                </Route>
            </Router>
        )
    }
}*/



export default App