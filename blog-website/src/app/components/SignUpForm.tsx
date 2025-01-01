'use client'       //client-Side Component
import { useState } from "react"
import {Input} from './ui/input'
import { Button } from './ui/button'
import {Card ,CardContent, CardDescription , CardHeader , CardTitle} from './ui/card'

const SignUpForm = () => {
    const [email , setEmail] = useState("")     //in 2 hooks ka istemal values ko rkhne k liye kiya jata hai email - ye apki value hai setEmail -ye function hai jo value ko change krne may help krta hai
    const [password , setPassword] = useState("")
    const [confirmPassword , setConfirmPassword] = useState("")

    const handlesubmit = (e:React.FormEvent) => {
        e.preventDefault();
        console.log('SignUp Successfully with:', {email,password ,confirmPassword});
    }
    return(
        
        <Card className="w-full max-w-sm md:max-w-md lg:max-w-lg bg-white ">
            <CardHeader>
                <CardTitle className="text-center text-xl md:tsxt-2xl">Sign Up</CardTitle>
                <CardDescription  className="text-center text-sm md:text-md">Enter the asked details to create new account</CardDescription>
            </CardHeader>
            <CardContent>
               <form onSubmit={handlesubmit} className="space-y-4">
                <div className="space-y-2">
                    <Input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required                    
                    />
                </div>
                <div className="space-y-2">
                    <Input
                    type="Password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required

                    />
                </div>
                <div className="space-y-2">
                    <Input
                    type="Password"
                    placeholder=" Confirm Password"
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    required

                    />
                </div>
                <Button  type="submit"
                 className="w-full bg-blue-400 hover:bg-blue-500 text-white py-2 rounded-md"
                 onClick={()=>alert("Thanks for Sign Up!")}>Sign Up</Button>
               </form>
            </CardContent>

        </Card>
       
    )
}

export default SignUpForm