import FirebaseConfig from './FirebaseConfig'
//import React,{createContext, useContext} from 'react'

//const userContext = React.createContext()


export function AuthProcess(props){
   
  // const [loginObject, setloginObject] = useState()
   let a
   console.log(props.password,props.userEmail)
   FirebaseConfig.auth().signInWithEmailAndPassword(props.userEmail,props.password)               //sign in with emailid and password
   .then((u)=>
   {   a=u               
      //setloginObject(u);     
      //FirebaseConfig.auth.onAuthStateChanged()                                                          
      console.log(a)                                                                          //if authentication succeed returns an object with authentication details stored in "u"
      console.log("hi")                                                              
   })
   .catch((err)=>
   {                                                                                //else if authentication fails returns an object with error report stored in "err"
      console.log("Error : " + err.message);
   })
   return a
}

export default AuthProcess


