import React, {useContext, useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import {AuthContext} from '../context/AuthContext'
import { useHistory } from "react-router-dom";
import FirebaseConfig, {db} from "./FirebaseConfig";

function Login()
 {
    const [userEmail, setUserEmail] = useState("")
    const [password, setPassword] = useState("")
    const {isAuthenticated, setIsAuthenticated, setAuthToken, setUserType, setschoolId, schoolId, userType} = useContext(AuthContext);
    const history = useHistory();

    function HandleSubmit(e){
        e.preventDefault()

        const authToken = FirebaseConfig.auth().signInWithEmailAndPassword(userEmail,password)
            .then(user=>
            {
                setIsAuthenticated(true);
                setAuthToken(authToken);
                // console.log(user.user.)
            })
            .catch(error=>
            {
                console.log(error.message)
            })

        // FirebaseConfig.auth().onAuthStateChanged(user=>{
        //     setAuthToken(user)})

        db.collection("users").onSnapshot(snapshot=>{
            snapshot.docs.forEach(element => {
                if(element.data().email===authToken.email){
                    setUserType(element.data().userType)
                    setschoolId(element.data().schoolId)
                    console.log(element.data())
                    console.log(schoolId, element.data().userType, userType, element.data().schoolId)
                }
            });
        })

        if(isAuthenticated) {
            history.push("/StudentForm");
        }
    }

    return (
        <div>
                <h2 className="text-center mb-4">BUS TRACKING SYSTEM</h2>
                <h3 className="text-center">Login</h3>
                <Form onSubmit={HandleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} placeholder="Email" required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required />
                    </Form.Group>
                    <Button type="submit" className="W-100" >Login</Button>
                </Form>
        </div>
    )
}

export default Login
