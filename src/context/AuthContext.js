import React, { useState} from "react";

export const AuthContext = React.createContext(undefined);

const AuthContextProvider = (props) => {

    const [userType, setUserType] = useState("")
    const [schoolId, setschoolId] = useState("")
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authToken, setAuthToken] = useState("");

    const valuesToBePassed={
        userType, setUserType,
        schoolId, setschoolId,
        isAuthenticated, setIsAuthenticated,
        authToken, setAuthToken
    }

    return (
        <AuthContext.Provider value={valuesToBePassed}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
