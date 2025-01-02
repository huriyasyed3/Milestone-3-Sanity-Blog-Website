interface CommentListProps {
    comments: string[];
    deleteComment: (index: number) => void;
  }
  
  const CommentList: React.FC<CommentListProps> = ({ comments, deleteComment }) => {
    return (
      <ul className="space-y-4 mt-6 max-h-60 overflow-y-auto custom-scrollbar">
        {comments.map((comment, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-50 p-4 rounded shadow-md"
          >
            <p className="text-gray-700">{comment}</p>
            <button
              onClick={() => deleteComment(index)}
              className="text-red-500 hover:text-red-700 transition duration-300"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default CommentList;
  