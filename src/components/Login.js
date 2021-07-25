import React, {useContext, useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import {AuthContext} from '../context/AuthContext'
// import { useHistory } from "react-router-dom";
import FirebaseConfig, {db} from "./FirebaseConfig";

function Login()
 {
    const [userEmail, setUserEmail] = useState("")
    const [password, setPassword] = useState("")
    const {setIsAuthenticated, setAuthToken, setUserType, setschoolId, userType, redirect} = useContext(AuthContext);
    // const history = useHistory();

    function HandleSubmit(e){
        e.preventDefault()

        const authToken = FirebaseConfig.auth().signInWithEmailAndPassword(userEmail,password)
            .then(user=>
            {
                setIsAuthenticated(true);
                setAuthToken(authToken);

                db.collection("Users").onSnapshot(snapshot=>{
                    snapshot.docs.forEach(element => {
                        //console.log("i")
                        if(element.data().emailId===user.user.email){
                            //console.log("in iiff")
                            setUserType(element.data().userType)
                            setschoolId(element.data().schoolId)
                            redirect(element.data().userType);
                        }
                    });
                })
            })
            .catch(error=>
            {
                console.log(error.message)
            })
    }

    return (
        <div className="loginForm">
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
