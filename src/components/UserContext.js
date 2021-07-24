import FirebaseConfig, {db} from './FirebaseConfig'
import React,{useContext,useEffect,useState} from 'react'

 const UserContext = React.createContext()

export function useUserContext(){

    return useContext(UserContext)
}
export function UserProvider({children}) {
    const [currentUser, setcurrentUser] = useState()
    const [userType, setuserType] = useState()
    const [schoolId, setschoolId] = useState()



    function login(userEmail,password){
         const authToken= FirebaseConfig.auth().signInWithEmailAndPassword(userEmail,password)
         .then(user=>
            {
                console.log(authToken)
                getUserDetails(userEmail)
                
             })
         .catch(error=>
            {
                console.log(error.message)
            })
         
    }
    useEffect(()=>{
        const unsubscribe=FirebaseConfig.auth().onAuthStateChanged(user=>{
            setcurrentUser(user)
            console.log(user.email)
            
        })
        return unsubscribe
    },[])
    
    function getUserDetails(userEmail){
        db.collection("USER").onSnapshot(snapshot=>{
            //console.log(snapshot.docs[0].data().userType)
            snapshot.docs.forEach(element => {
                
                if(element.data().emailId===currentUser.email){
                    
                    setuserType(element.data().userType)
                    setschoolId(element.data().schoolId)
                    console.log(userType,schoolId)
                }
               
            });
        })
        
        console.log(currentUser)


    }
    const userInfo={
        currentUser,
        userType,
        schoolId,
        login

    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    )
}
