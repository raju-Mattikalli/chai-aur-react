import Navbar from "./Components/Navbar"
import { UserProvider } from "./Context/UserContext"


export default function App() {
  return (
   <UserProvider>
    <Navbar/>
   </UserProvider>
  )
}