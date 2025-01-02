import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";


interface CommentInputProps{
    addComment:(commint:string) => void 
}
const CommentInput:React.FC<CommentInputProps> =({addComment})=>{
    const [comment , setComment] = useState<string>("");

    const handleSubmit = () =>{
      if(comment.trim()){
        addComment(comment)
        setComment("")
      }
    };
    return(
        <div className="flex space-x-2 p-4 bg-gray-100 rounded shadow-lg">
        <Input
       type="text"
       className="border rounded-lg p-3 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-400"
       value={comment}
       placeholder="Write your comment"
       onChange={(e)=>setComment(e.target.value)}
        />

        <Button onClick={handleSubmit}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
      Add
        </Button>
        </div>
    )
}

export default CommentInput