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
        <table className="rtable">
        {/*//     <h1>Student Details</h1>*/}
            <thead>
            <tr>
                <th>Browser</th>
                <th>Sessions</th>
                <th>Percentage</th>
                <th>New Users</th>
                <th>Avg. Duration</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Chrome</td>
                <td>9,562</td>
                <td>68.81%</td>
                <td>7,895</td>
                <td>01:07</td>
            </tr>
            </tbody>

        </table>
    )
}
export default ViewStudent    