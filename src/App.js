import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css"
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Login />
      </div>
    </UserProvider>
    
  );
}   

export default App;
