import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import {db} from './FirebaseConfig'
import CreateUser from './CreateUser'
import {AuthContext} from '../context/AuthContext'
        
    function BusAttendentForm(){
        const [AttendentName, setAttendentName] = useState("")
        const [AttendentEmailId, setAttendentEmailId] = useState("")
        const [BusNumber, setBusNumber] = useState("")
        const [BusRouteNumber, setBusRouteNumber] = useState("")
        const [PhoneNumber, setPhoneNumber] = useState("")
        const [AttendentId, setAttendentId] = useState("")

        const {schoolId} = useUserContext()
       
         function HandleSubmit(e){
            e.preventDefault()   
            AttendentInfo()
            CreateUser(AttendentEmailId,"parent")
            
        }

       function AttendentInfo(){
            console.log(schoolId)
            db.collection("Schools").doc(schoolId).collection("BusAttendant").doc(AttendentId)
                .set({
                    name:AttendentName,
                    emailId:AttendentEmailId,
                    busNumber:BusNumber,
                    routeNumber:BusRouteNumber,
                    contactNumber:PhoneNumber,
                    attendentId:AttendentId
                    
                })
                .then(() => {
                    alert(" Bus Detail has been submiteed");
                })
                .catch((error) =>{
                    alert(error.message);
                });
        }
        
        return(
            <Form onSubmit={HandleSubmit}>

                <Form.Group id="AttendentName">
                    <Form.Label>Attendent Name</Form.Label>
                    <Form.Control type="text" value={AttendentName} onChange={(e)=>setAttendentName(e.target.value)} placeholder="Attendent Name" required />
                </Form.Group>

                <Form.Group id="emailId">
                    <Form.Label>emailId</Form.Label>
                    <Form.Control type="text" value={AttendentEmailId} onChange={(e)=>setAttendentEmailId(e.target.value)} placeholder="113711" required />
                </Form.Group>

                <Form.Group id="BusNumber">
                    <Form.Label>Bus Number</Form.Label>
                    <Form.Control type="text" value={BusNumber} onChange={(e)=>setBusNumber(e.target.value)} placeholder="Address" required />
                </Form.Group>

                <Form.Group id="RouteNumber">
                    <Form.Label>Route Number</Form.Label>
                    <Form.Control type="text" value={BusRouteNumber} onChange={(e)=>setBusRouteNumber(e.target.value)} placeholder="City" required />
                </Form.Group>

                <Form.Group id="PhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" value={PhoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} placeholder="110011" required />
                </Form.Group>

                <Form.Group id="AttendentId">
                    <Form.Label>AttendentId</Form.Label>
                    <Form.Control type="text" value={AttendentId} onChange={(e)=>setAttendentId(e.target.value)} placeholder="110011" required />
                </Form.Group>

                 <Button type="submit" className="W-100" >Login</Button>
            </Form>
        )
    }
     export default BusAttendentForm