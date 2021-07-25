import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'       
import {useUserContext} from './UserContext'

    function StudentForm()
    {
        const [StudentName, setStudentName] = useState("")
        const [RollNumber, setRollNumber] = useState("")
        const [Address, setAddress] = useState("")
        const [City, setCity] = useState("")
        const [PinCode, setPinCode] = useState("")
        const [ParentName, setParentName] = useState("")
        const [ParentsPhoneNumber, setParentsPhoneNumber] = useState("")
        const [ParentsEmail, setParentsEmail] = useState("")

        const {schoolId} = useUserContext()
       
        function HandleSubmit(e){
            e.preventDefault()   
            StudentInfo()
            test2()
            
        }
        function StudentInfo(){
            console.log(schoolId)
        }
        function test2(){
            console.log("is the school name")
        }
        return(
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

                <Form.Group id="PinCode">
                    <Form.Label>State </Form.Label>
                    <Form.Control type="text" value={PinCode} onChange={(e)=>setPinCode(e.target.value)} placeholder="110011" required />
                </Form.Group>

                <Form.Group id="ParentsName">
                    <Form.Label>Parents Name</Form.Label>
                    <Form.Control type="text" value={ParentName} onChange={(e)=>setParentName(e.target.value)} placeholder="Parents Name" required />
                </Form.Group>

                <Form.Group id="ParentsPhoneNumber">
                    <Form.Label>Parents Phone Number</Form.Label>
                    <Form.Control type="text" value={ParentsPhoneNumber} onChange={(e)=>setParentsPhoneNumber(e.target.value)} placeholder="Parents Phone Number" required />
                </Form.Group>

                <Form.Group id="ParentsEmail">
                    <Form.Label>Parents Email</Form.Label>
                    <Form.Control type="text" value={ParentsEmail} onChange={(e)=>setParentsEmail(e.target.value)} placeholder="Parents Email" required />
                </Form.Group>

                 <Button type="submit" className="W-100" >Login</Button>
            </Form>
        )
    }
     export default StudentForm