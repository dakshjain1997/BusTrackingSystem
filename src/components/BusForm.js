import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import {useUserContext} from './UserContext'       
        
    function BusAttendentForm(){
        const [DriverName, setDriverName] = useState("")
        const [BusRegistrationNumber, setBusRegistrationNumber] = useState("")
        const [BusNumber, setBusNumber] = useState("")
        const [BusRouteNumber, setBusRouteNumber] = useState("")
        const [PhoneNumber, setPhoneNumber] = useState("")

        const {schoolId} = useUserContext()
       
         function HandleSubmit(e){
            e.preventDefault()   
        }
        
        return(
            <Form onSubmit={HandleSubmit}>

                <Form.Group id="DriverName">
                    <Form.Label>Driver Name</Form.Label>
                    <Form.Control type="text" value={DriverName} onChange={(e)=>setDriverName(e.target.value)} placeholder="Attendent Name" required />
                </Form.Group>

                <Form.Group id="BusRegistrationNumber">
                    <Form.Label>Bus Registration Number</Form.Label>
                    <Form.Control type="text" value={BusRegistrationNumber} onChange={(e)=>setBusRegistrationNumber(e.target.value)} placeholder="113711" required />
                </Form.Group>

                <Form.Group id="BusNumber">
                    <Form.Label>Bus Number</Form.Label>
                    <Form.Control type="text" value={BusNumber} onChange={(e)=>setBusNumber(e.target.value)} placeholder="Address" required />
                </Form.Group>

                <Form.Group id="BusRouteNumber">
                    <Form.Label>Bus Route Number</Form.Label>
                    <Form.Control type="text" value={BusRouteNumber} onChange={(e)=>setBusRouteNumber(e.target.value)} placeholder="City" required />
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