import React, {useContext} from 'react'
import {db} from './FirebaseConfig'
import {AuthContext} from '../context/AuthContext'


function ViewStudent(){

    const {schoolId, isAuthenticated} = useContext(AuthContext)
    console.log("wow")
    ///if (isAuthenticated){
    //     const a = db.collection("School").doc(schoolId).collection("Students").onSnapshot(snapshot=>{
    //         snapshot.docs.forEach(element=>{
    //             console.log(element.data())
    //         })
    //     })
    //         console.log(a)

  
    
   // db.collection("School").doc(schoolId).collection("Bus")
    return(
        <div className="viewDetails">
        {/*//     <h1>Student Details</h1>*/}

            <div className="row">

                <div id="detail">
                    <label className="title">Student Name</label>
                    <label className="value">Student Name</label>
                </div>

                <div id="detail">
                    <label>ROll Number</label>
                    <label>ROll Number</label>
                </div>

                <div id="detail">
                    <label>Address</label>
                    <label>Address</label>
                </div>

                <div id="detail">
                    <label>City</label>
                    <label>City</label>
                </div>

                <div id="detail">
                    <label>State </label>
                    <label>State </label>
                </div>

                <div id="detail">
                    <label>Country</label>
                    <label>Country</label>
                </div>

                <div id="detail">
                    <label>PicDropLocation</label>
                    <label>PicDropLocation</label>
                </div>

                <div id="detail">
                    <label>Bus Route</label>
                    <label>Bus Route</label>
                </div>

                <div id="detail">
                    <label>Bus Number</label>
                    <label>Bus Number</label>
                </div>

                <div id="detail">
                    <label>Parents Name</label>
                    <label>Parents Name</label>
                </div>

                <div id="detail">
                    <label>Parent Phone Number</label>
                    <label>Parent Phone Number</label>
                </div>

                <div id="detail">
                    <label>Parent Email</label>
                    <label>Parent Email</label>
                </div>
            </div>
        </div>
    )
}
export default ViewStudent    