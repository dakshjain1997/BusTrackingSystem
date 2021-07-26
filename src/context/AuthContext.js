import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import FirebaseConfig, {db} from "../components/FirebaseConfig";

export const AuthContext = React.createContext(undefined);

const AuthContextProvider = (props) => {

    const History = useHistory();
    const [userType, setUserType] = useState("")
    const [schoolId, setschoolId] = useState("")
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authToken, setAuthToken] = useState("");

    function redirect(userType){

        if(userType === "Parent"){
            console.log("parent login")
            History.push("/parentPage");
        }
        else if(userType === "School") {
            console.log("school login")
            History.push("/dashboard");
        }
       
        else if(userType === "BusAttendant"){
            console.log("attendant login")
            History.push("/busAttendantPage");
        }
    }

    function createUser(emailId, userType){

        db.collection("Users").doc(emailId).set({
            emailId: emailId,
            userType: userType,
            schoolId: schoolId
        }).then(r  =>{
        })
        const  password="123456"
        FirebaseConfig.auth().createUserWithEmailAndPassword(emailId,password)
    }

    const valuesToBePassed={
        userType, setUserType,
        schoolId, setschoolId,
        isAuthenticated, setIsAuthenticated,
        authToken, setAuthToken,
        redirect, createUser
    }

    return (
        <AuthContext.Provider value={valuesToBePassed}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
