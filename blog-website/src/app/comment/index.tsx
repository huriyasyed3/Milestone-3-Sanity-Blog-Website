'use client'
import CommentInput from '../components/CommentInput'
import CommentList from "../components/CommentList";
import { useState } from 'react';

const HomeComment: React.FC = () => {
    const [comments,setComments] = useState<string[]>([])
   const addComment =(newComments:string)=>{
    setComments([...comments , newComments])
   }
   const deleteComment = (index: number) =>{
    const updatedComments = comments.filter((_,i)=> i !== index);
    setComments(updatedComments)
   };
   return(
    <div className=' p-6'>
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Comment Section</h1>
            <CommentInput addComment={addComment}/>
            <CommentList comments={comments} deleteComment={deleteComment}/>
        </div>
    </div>
   );
};

export default HomeComment;