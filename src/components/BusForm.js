import React, {useContext, useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import {db} from './FirebaseConfig'
import {AuthContext} from '../context/AuthContext'
        
    function BusAttendentForm(){
        const [DriverName, setDriverName] = useState("")
        const [BusRegistrationNumber, setBusRegistrationNumber] = useState("")
        const [BusNumber, setBusNumber] = useState("")
        const [BusRouteNumber, setBusRouteNumber] = useState("")
        const [DriverContactNumber, setDriverContactNumber] = useState("")

        const {schoolId} = useContext(AuthContext)
        // const {schoolId} = useUserContext()
       
         function HandleSubmit(e){
            e.preventDefault()   
            BusInfo()
        }
        
        function BusInfo(){
            console.log(schoolId)
            db.collection("Schools").doc(schoolId).collection("Buses").doc(BusRouteNumber)
                .set({
                    driverName:DriverName,
                    busRegistrationNumber:BusRegistrationNumber,
                    busNumber:BusNumber,
                    busRouteNumber:BusRouteNumber,
                    driverContactNumber:DriverContactNumber,
                    
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

                <Form.Group id="DriverContactNumber">
                    <Form.Label>DriverContactNumber </Form.Label>
                    <Form.Control type="text" value={DriverContactNumber} onChange={(e)=>setDriverContactNumber(e.target.value)} placeholder="110011" required />
                </Form.Group>

                
                 <Button type="submit" className="W-100" >submit</Button>
            </Form>
            </div>
        )
    }
     export default BusAttendentForm