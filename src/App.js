import Login from "./components/Login";
import Dashboard from "./components/Dashboard"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import StudentForm from "./components/StudentForm.js"
import BusForm from "./components/BusForm.js"
import AuthContextProvider from "./context/AuthContext";
import Navbar from "./components/Navbar";
import ViewStudent from "./components/ViewStudent";

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
                            <Navbar/>
                            <Dashboard/>
                        </Route>

                        <Route path="/Studentform">
                            <Navbar/>
                            <StudentForm/> 
                            {/* <ViewStudent/> */}
                        </Route>

                        <Route path="/BusForm">
                            <Navbar/>
                            <BusForm/>
                        </Route>

                    </Switch>
                </div>
            </AuthContextProvider>
        </Router>
    );
}

export default App;
