import { EmpytMemories } from "@/components/EmptyMemories"
import app from "next/app"
import { cookies } from "next/headers"
import { useRouter } from "next/navigation";


export default function UpdateMemory(){
  const router = useRouter()
  const isAuthenticated = cookies().has('token')
  
  async function savedMemory(){
    
  }

  if(!isAuthenticated){
    return <EmpytMemories />
  }

  const token = cookies().get('token')?.value
  // const response = await api.get(`/memory/${coverUrl}`, {
  //   headers: {
  //     Authorization: `Bearer ${token}`
  //   }
  // })
    return(
      <>
        
      </>
    )

}