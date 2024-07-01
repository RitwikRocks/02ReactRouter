import { useParams } from "react-router-dom"

const User = () => {
  
  const {id} = useParams()

  return (
    <div className="text-center text-4xl bg-gray-600 text-green-200 p-4">
        User: {id}
    </div>
  )
}

export default 
User