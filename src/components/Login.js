import React, { useState } from 'react'
import {Card,Form,Button} from 'react-bootstrap'
import {useUserContext} from './UserContext'
import { useHistory } from "react-router-dom";
//import {AuthProcess} from './AuthProcess'

function Login()
 {
    const [userEmail, setUserEmail] = useState("")    //used hook(useState) to store users email from jsx
    const [password, setPassword] = useState("")      //used hook(useState) to store users password from jsx
    const {login,isAuthenticated} = useUserContext()
    const history = useHistory();

    function HandleSubmit(e){
        e.preventDefault()                              //this functions prevents the page to reload in case of submition of form
        console.log('hi') 
        login(userEmail,password)
        if(isAuthenticated) {
            history.push("/StudentForm");
        }

        //console.log(userEmail,password);               //to check userid,passwored in console
        //console.log(a)       
    }

    return (
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">BUS TRACKING SYSTEM</h2>
                <h3 className="text-center">Login</h3>
                <Form onSubmit={HandleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} placeholder="Email" required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required />
                    </Form.Group>
                    <Button type="submit" className="W-100" >Login</Button>
                </Form>
            </Card.Body>
        </Card>
        
    )
}

export default Login
