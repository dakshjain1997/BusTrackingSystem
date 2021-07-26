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

        if(userType === "School") {
            console.log("trying to push in condition")
            History.push("/dashboard");
        }
    }

    function createUser(emailId, userType){

        db.collection("Users").doc(emailId).set({
            emailId: emailId,
            UserType: userType,
            schoolId: schoolId
        }).then(r  =>{
        })
        FirebaseConfig.auth().createUserWithEmailAndPassword(emailId,"123456")
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
