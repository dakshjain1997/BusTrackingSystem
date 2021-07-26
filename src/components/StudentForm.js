import React, {useContext, useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import {db} from './FirebaseConfig'
import {AuthContext} from '../context/AuthContext'

function StudentForm()
{
    const [StudentName, setStudentName] = useState("")
    const [RollNumber, setRollNumber] = useState("")
    const [Address, setAddress] = useState("")
    const [State, setState] = useState("")
    const [City, setCity] = useState("")
    const [Country, setCountry] = useState("")
    const [PicDropLocation, setPicDropLocation] = useState("")
    const [BusRoute, setBusRoute] = useState("")
    const [BusNumber, setBusNumber] = useState("")
    const [ParentName, setParentName] = useState("")
    const [ParentPhoneNumber, setParentPhoneNumber] = useState("")
    const [ParentEmail, setParentEmail] = useState("")

    const {schoolId, createUser} = useContext(AuthContext)

    function HandleSubmit(e){
        e.preventDefault()
        StudentInfo()
        createUser(ParentEmail,"Parent")
    }

    function StudentInfo(){
        console.log(schoolId)
        db.collection("Schools").doc(schoolId).collection("Students").doc(RollNumber)
            .set({
                studentName:StudentName,
                rollNo:RollNumber,
                address:Address,
                city:City,
                state:State,
                country:Country,
                picDropLocation:PicDropLocation,
                busRoute:BusRoute,
                busNumber:BusNumber,
                parentName:ParentName,
                parentContactNumber:ParentPhoneNumber,
                parentEmail:ParentEmail,
            })
            .then(() => {
                alert(" Student Detail has been submiteed");
            })
            .catch((error) =>{
                alert(error.message);
            });
    }

    return(
        <div className="infoForm">
            <h1>Student Form</h1>
        <Form onSubmit={HandleSubmit}>

            <Form.Group id="studentName">
                <Form.Label>Student Name</Form.Label>
                <Form.Control type="text" value={StudentName} onChange={(e)=>setStudentName(e.target.value)} placeholder="Student Name" required />
            </Form.Group>

            <Form.Group id="rollNumber">
                <Form.Label>ROll Number</Form.Label>
                <Form.Control type="text" value={RollNumber} onChange={(e)=>setRollNumber(e.target.value)} placeholder="113711" required />
            </Form.Group>

            <Form.Group id="address">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" value={Address} onChange={(e)=>setAddress(e.target.value)} placeholder="Address" required />
            </Form.Group>

            <Form.Group id="City">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" value={City} onChange={(e)=>setCity(e.target.value)} placeholder="City" required />
            </Form.Group>

            <Form.Group id="State">
                <Form.Label>State </Form.Label>
                <Form.Control type="text" value={State} onChange={(e)=>setState(e.target.value)} placeholder="110011" required />
            </Form.Group>

            <Form.Group id="Country">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" value={Country} onChange={(e)=>setCountry(e.target.value)} placeholder="110011" required />
            </Form.Group>

            <Form.Group id="PicDropLocation">
                <Form.Label>PicDropLocation</Form.Label>
                <Form.Control type="text" value={PicDropLocation} onChange={(e)=>setPicDropLocation(e.target.value)} placeholder="110011" required />
            </Form.Group>

            <Form.Group id="BusRoute">
                <Form.Label>Bus Route</Form.Label>
                <Form.Control type="text" value={BusRoute} onChange={(e)=>setBusRoute(e.target.value)} placeholder="110011" required />
            </Form.Group>

            <Form.Group id="BusNumber">
                <Form.Label>Bus Number</Form.Label>
                <Form.Control type="text" value={BusNumber} onChange={(e)=>setBusNumber(e.target.value)} placeholder="110011" required />
            </Form.Group>

            <Form.Group id="ParentName">
                <Form.Label>Parents Name</Form.Label>
                <Form.Control type="text" value={ParentName} onChange={(e)=>setParentName(e.target.value)} placeholder="Parents Name" required />
            </Form.Group>

            <Form.Group id="ParentPhoneNumber">
                <Form.Label>Parent Phone Number</Form.Label>
                <Form.Control type="text" value={ParentPhoneNumber} onChange={(e)=>setParentPhoneNumber(e.target.value)} placeholder="Parents Phone Number" required />
            </Form.Group>

            <Form.Group id="ParentEmail">
                <Form.Label>Parent Email</Form.Label>
                <Form.Control type="text" value={ParentEmail} onChange={(e)=>setParentEmail(e.target.value)} placeholder="Parents Email" required />
            </Form.Group>

            <Button type="submit" className="W-100" >submit</Button>
        </Form>
        </div>
    )
}
export default StudentForm