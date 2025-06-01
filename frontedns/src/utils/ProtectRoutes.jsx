import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"



const ProtectRoutes = ({children
    // ,requiredRole
}) => {
  // const role='admin'
    const token=useSelector((state)=>state.user.token) 
    // const user=useSelector((state)=>state.user.user)
    if(!token){
      return  <Navigate to='/login' replace />
    }
    // if(requiredRole && requiredRole!==role){
    //   console.log("hello")
    //    return <Navigate to='/register' replace />
    // }
    return children
 
}

export default ProtectRoutes
