import {useEffect, useState} from "react"

const Github = () => {
   
   const [data,SetData]= useState({}); 
  useEffect(()=>{
     fetch('https://api.github.com/users/RitwikRocks')
     .then((response)=> response.json())
     .then((data)=>{
      SetData(data)
     console.log(data);
  })
  },[])

  return (
    <>
    <div className="text-4xl text-center text-white bg-gray-500 p-4">Github Repository :{data.public_repos}</div>
    <div className="content-center bg-green-300 flex "><img src={data.avatar_url} width={300} alt="Github Profile Pic"/></div>
    </>
  )
}

export default Github