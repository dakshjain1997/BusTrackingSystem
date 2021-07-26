import Login from "./components/Login";
import Dashboard from "./components/Dashboard"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import StudentForm from "./components/StudentForm.js"
import BusForm from "./components/BusForm.js"
import AuthContextProvider from "./context/AuthContext";
import Navbar from "./components/Navbar";
import ViewStudent from "./components/ViewStudent";
import BusAttendentForm from "./components/BusAttenndentForm";
import ParentPage from  "./components/Parent"
import BusAttendantPage from "./components/BusAttendant"

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

                        <Route path="/studentform">
                            <Navbar/>
                            <StudentForm/>
                        </Route>

                        <Route exact path="/busAttendantForm">
                            <Navbar/>
                           <BusAttendentForm/>
                        </Route>

                        <Route exact path="/busForm">
                            <Navbar/>
                            <BusForm/>
                        </Route>

                        <Route exact path="/viewStudent">
                            <Navbar/>
                            <ViewStudent/>
                        </Route>

                        <Route exact path="/viewBusAttendant">
                            <Navbar/>
                        {/*    view buss attendant*/}
                        </Route>

                        <Route exact path="/viewBus">
                            <Navbar/>
                            {/*    view buss */}
                        </Route>

                        <Route exact path="/parentPage">
                            <ParentPage/>
                        </Route>

                        <Route exact path="/busAttendantPage">
                            <BusAttendantPage/>
                        </Route>

                    </Switch>
                </div>
            </AuthContextProvider>
        </Router>
    );
}

export default App;
