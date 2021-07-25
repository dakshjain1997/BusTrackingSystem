import FirebaseConfig, {db} from "./FirebaseConfig"
import {AuthContext} from '../context/AuthContext'
import {useContext} from 'react'


function  CreateUser(emailId,userType){
    console.log("ti here")
    const {schoolId} = useContext(AuthContext)

    db.collection("users").doc(emailId).set({
        emailId:emailId,
        UserType:userType,
        schoolId:schoolId
    })

    FirebaseConfig.auth().createUserWithEmailAndPassword(emailId,"123456")


}
export default CreateUser   