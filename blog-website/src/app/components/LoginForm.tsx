'use client'
import { useState } from "react";
import { Button } from "./ui/button";
import { Input} from "./ui/input";
import { Card , CardContent,CardDescription,CardHeader,CardTitle} from "./ui/card";

const LoginForm = ()=>{
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault();
        console.log('Login attempt with',{email , password});
        
    }
    return(
      
        <Card className="w-full max-w-sm md:max-w-md lg:max-w-lg bg-white ">
     <CardHeader>
        <CardTitle className="text-center text-xl md:tsxt-2xl">Login</CardTitle>
        <CardDescription className="text-center text-sm md:text-md">Enter your credentails to access your account </CardDescription>
     </CardHeader>
     <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
         <div className="space-y-2">
            <Input 
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
             />
              </div>
             <div className="space-y-2">
                <Input
                type="password"
                placeholder="Enter your passwrod"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
                />
             </div>
        <Button type="submit" 
        className="w-full bg-blue-400 hover:bg-blue-500 text-white py-2 rounded-md"
         onClick={()=>alert('Thanks for Login!')}>Login</Button>
        </form>
     </CardContent>
        </Card>
      
    )
}

export default LoginForm;