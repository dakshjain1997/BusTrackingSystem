import Login from "./components/Login";
import Dashboard from "./components/Dashboard"
import "bootstrap/dist/css/bootstrap.min.css"
import { UserProvider } from "./components/UserContext";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <UserProvider>
                <div className="App">
                    <Switch>
                        <Route exact path="/">
                            <Login />
                        </Route>

                        <Route path="/dashboard">
                            <Dashboard/>
                        </Route>
                    </Switch>
                </div>
            </UserProvider>
        </Router>
    );
}

export default App;
