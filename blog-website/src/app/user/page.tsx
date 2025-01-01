 'use client'
import LoginForm from "../components/LoginForm"
import SignUpForm from "../components/SignUpForm"
import { Button } from "../components/ui/button"
import { useState } from "react"
export default function User(){
    const [isLogin ,setIsLogin] = useState(true)
    return(
    <div className="  flex flex-col justify-center items-center content-center text-black text-center mt-10  ">
    
        <div className=" mb-4">
            <Button 
              className="text-sm"
              onClick={(isLogin)=>setIsLogin(!isLogin)}
              variant={"ghost"}
              >
                {isLogin ? 'Need a account: Create ': 'Login with your current account' }
              </Button>
              {isLogin ? <LoginForm/> : <SignUpForm/>} 
        </div>
        
     </div>
    )
}