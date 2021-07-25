import Login from "./components/Login";
import Dashboard from "./components/Dashboard"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import StudentForm from "./components/StudentForm.js"
import BusForm from "./components/BusForm.js"
import AuthContextProvider from "./context/AuthContext";

function App() {
    return (
        <Router>
            <AuthContextProvider>
                <div className="App">
                    <Switch>

                        <Route exact path="/">
                            <Login />
                        </Route>

                        <Route path="/dashboard">
                            <Dashboard/>
                        </Route>

                        <Route path="/Studentform">
                            <StudentForm/>
                        </Route>

                        <Route path="/BusForm">
                            <BusForm/>
                        </Route>

                    </Switch>
                </div>
            </AuthContextProvider>
        </Router>
    );
}

export default App;
