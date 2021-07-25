import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'    
import {useUserContext} from './UserContext'   
        
    function BusAttendentForm(){
        const [AttendentName, setAttendentName] = useState("")
        const [AttendentId, setAttendentId] = useState("")
        const [BusNumber, setBusNumber] = useState("")
        const [RouteNumber, setRouteNumber] = useState("")
        const [PhoneNumber, setPhoneNumber] = useState("")

        const {schoolId} = useUserContext()
       
         function HandleSubmit(e){
            e.preventDefault()   
            
        }
        
        return(
            <Form onSubmit={HandleSubmit}>

                <Form.Group id="AttendentName">
                    <Form.Label>Attendent Name</Form.Label>
                    <Form.Control type="text" value={AttendentName} onChange={(e)=>setAttendentName(e.target.value)} placeholder="Attendent Name" required />
                </Form.Group>

                <Form.Group id="AttendentId">
                    <Form.Label>Attendent Id</Form.Label>
                    <Form.Control type="text" value={AttendentId} onChange={(e)=>setAttendentId(e.target.value)} placeholder="113711" required />
                </Form.Group>

                <Form.Group id="BusNumber">
                    <Form.Label>Bus Number</Form.Label>
                    <Form.Control type="text" value={BusNumber} onChange={(e)=>setBusNumber(e.target.value)} placeholder="Address" required />
                </Form.Group>

                <Form.Group id="RouteNumber">
                    <Form.Label>Route Number</Form.Label>
                    <Form.Control type="text" value={RouteNumber} onChange={(e)=>setRouteNumber(e.target.value)} placeholder="City" required />
                </Form.Group>

                <Form.Group id="PhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" value={PhoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} placeholder="110011" required />
                </Form.Group>

                
                 <Button type="submit" className="W-100" >Login</Button>
            </Form>
        )
    }
     export default BusAttendentForm