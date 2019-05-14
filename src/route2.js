import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Header />

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
                <Route path="/contact" component={Copters} />
            </div>
        </Router>
    );
}


function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Topic({ match }) {
    return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:id`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    );
}

function Address({ match }) {
    return (
        <div>
            <h1>Local : Thailand</h1>
            <h1>City : Sisaket</h1>
        </div>
    )
}

function Contact({ match }) {

    if (match.params.id == "phone") {
        return (
            <div>
                <h1>Phone : {match.params.value}</h1>
            </div>
        )
    }else{
        return (
            <div>
                <h1>Address : {match.params.value}</h1>
            </div>
        )
    }
    
}

function Copters({ match }) {
    return (
        <div>
            <h2>Copter</h2>
            <label>Contacts</label>
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="list-group">
                            <a class="list-group-item">
                                <Link to={`${match.url}/phone/0828680968`}>Phone</Link>
                            </a>
                            <a class="list-group-item">
                                <Link to={`${match.url}/address/123-3 Thailand BKK 10310`}>Address</Link>
                            </a>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Route path={`${match.path}/:id/:value`} component={Contact} />
                        <Route
                            exact
                            path={match.path}
                            render={() => <h3>Please select a contacts.</h3>}
                        />
                    </div>


                </div>
            </div>

        </div>
    );
}


function Header() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/topics">Topics</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    );
}

export default App;