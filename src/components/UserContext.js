import FirebaseConfig, {db} from './FirebaseConfig'
import React,{useContext,useEffect,useState} from 'react'

 const UserContext = React.createContext()

export function useUserContext(){

    return useContext(UserContext)
}
export function UserProvider({children}) {
    const [userType, setuserType] = useState()
    const [schoolId, setschoolId] = useState()
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authToken, setAuthToken] = useState();



    function login(userEmail,password){
         const authToken= FirebaseConfig.auth().signInWithEmailAndPassword(userEmail,password)
         .then(user=>
            {
                getUserDetails(userEmail)
                setIsAuthenticated(true);
                setAuthToken(authToken)

            })
         .catch(error=>
            {
                console.log(error.message)
            })
         
    }
    useEffect(()=>{
        const unsubscribe=FirebaseConfig.auth().onAuthStateChanged(user=>{
            setAuthToken(user)

            
        })
        return unsubscribe
    },[])
    
    function getUserDetails(userEmail){
        db.collection("users").onSnapshot(snapshot=>{
           // console.log(snapshot.docs[2].data().userType)
            snapshot.docs.forEach(element => {
               // console.log(currentUser.email,element.data())
                if(element.data().email===authToken.email){
                    
                    setuserType(element.data().userType)
                    setschoolId(element.data().schoolId)
                }
               
            });
        })


    }
    const userInfo={
        userType,
        schoolId,
        isAuthenticated,
        authToken,
        login
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    )
}
