import  {useContext,async} from 'react'
import {db} from './FirebaseConfig'
import {Card,Form,Button} from 'react-bootstrap'
import {AuthContext} from '../context/AuthContext'


function ViewStudent(){

    const {schoolId, isAuthenticated} = useContext(AuthContext)
    console.log("wow")
    ///if (isAuthenticated){
        const a= db.collection("School").doc(schoolId).collection("Students").onSnapshot(snapshot=>{
            snapshot.docs.forEach(element=>{
                console.log(element.data())
            })
        })
            console.log(a)

  
    
   // db.collection("School").doc(schoolId).collection("Bus")
    return(
        <div>hi</div>
    )
}
export default ViewStudent    