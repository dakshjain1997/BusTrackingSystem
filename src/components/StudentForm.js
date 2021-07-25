import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'       
import {useUserContext} from './UserContext'
import {db} from './FirebaseConfig'

    function StudentForm()
    {
        const [StudentName, setStudentName] = useState("")
        const [RollNumber, setRollNumber] = useState("")
        const [Address, setAddress] = useState("")
        const [State, setState] = useState("")
        const [City, setCity] = useState("")
        const [PinCode, setPinCode] = useState("")
        const [ParentName, setParentName] = useState("")
        const [ParentPhoneNumber, setParentPhoneNumber] = useState("")
        const [ParentEmail, setParentEmail] = useState("")

        const {schoolId} = useUserContext()
       
        function HandleSubmit(e){
            e.preventDefault()   
            StudentInfo()
            test2()
            
        }
        function StudentInfo(){
            console.log(schoolId)
            db.collection("School").doc(schoolId).collection("Students").doc(RollNumber)
            .set({
                StudentName:StudentName,
                RollNumber:RollNumber,
                Address:Address,
                City:City,
                State:State,
                PinCode:PinCode,
                ParentName:ParentName,
                ParentPhoneNumber:ParentPhoneNumber,
                ParentEmail:ParentEmail,
            })
            .then(() => {
            alert(" Student Detail has been submiteed");
            })
            .catch((error) =>{
                alert(error.message);
            });
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

                <Form.Group id="State">
                    <Form.Label>State </Form.Label>
                    <Form.Control type="text" value={State} onChange={(e)=>setState(e.target.value)} placeholder="110011" required />
                </Form.Group>
                
                <Form.Group id="PinCode">
                    <Form.Label>PinCode</Form.Label>
                    <Form.Control type="text" value={PinCode} onChange={(e)=>setPinCode(e.target.value)} placeholder="110011" required />
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

                 <Button type="submit" className="W-100" >Login</Button>
            </Form>
        )
    }
     export default StudentForm