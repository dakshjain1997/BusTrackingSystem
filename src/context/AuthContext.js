import React, { useState} from "react";
import {useHistory} from "react-router-dom";

export const AuthContext = React.createContext(undefined);

const AuthContextProvider = (props) => {

    const History = useHistory();
    const [userType, setUserType] = useState("")
    const [schoolId, setschoolId] = useState("")
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authToken, setAuthToken] = useState("");

    function redirect(userType){
        if(userType === "school") {
            console.log("trying to push in condition")
            History.push("/StudentForm");
        }
        else if(userType === "parent"){

        }
    }

    const valuesToBePassed={
        userType, setUserType,
        schoolId, setschoolId,
        isAuthenticated, setIsAuthenticated,
        authToken, setAuthToken, redirect
    }

    return (
        <AuthContext.Provider value={valuesToBePassed}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
