import React, {useContext, useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import {db} from './FirebaseConfig'
import {AuthContext} from '../context/AuthContext'

    function BusAttendentForm(){
        const [AttendentName, setAttendentName] = useState("")
        const [AttendentEmailId, setAttendentEmailId] = useState("")
        const [BusNumber, setBusNumber] = useState("")
        const [BusRouteNumber, setBusRouteNumber] = useState("")
        const [PhoneNumber, setPhoneNumber] = useState("")
        const [AttendantId, setAttendantId] = useState("")

        const {schoolId, createUser} = useContext(AuthContext)

         function HandleSubmit(e){
            e.preventDefault()
            AttendentInfo()
            createUser(AttendentEmailId,"BusAttendant")
        }

       function AttendentInfo(){
            console.log(schoolId)
            db.collection("Schools").doc(schoolId).collection("BusAttendants").doc(AttendantId)
                .set({
                    name:AttendentName,
                    emailId:AttendentEmailId,
                    busNumber:BusNumber,
                    routeNumber:BusRouteNumber,
                    contactNumber:PhoneNumber,
                    attendantId:AttendantId

                })
                .then(() => {
                    alert(" Bus Detail has been submiteed");
                })
                .catch((error) =>{
                    alert(error.message);
                });
        }

        return(
            <div className="infoForm">
            <Form onSubmit={HandleSubmit}>

                <Form.Group id="AttendantName">
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

                <Form.Group id="AttendantId">
                    <Form.Label>AttendentId</Form.Label>
                    <Form.Control type="text" value={AttendantId} onChange={(e)=>setAttendantId(e.target.value)} placeholder="110011" required />
                </Form.Group>

                 <Button type="submit" className="W-100" >submit</Button>
            </Form>
            </div>
        )
    }

    export default BusAttendentForm