import Navbar from "./Components/Navbar"
import UserDetails from "./Components/UserDetails"
import { UserProvider } from "./Context/UserContext"


export default function App() {
  return (
   <UserProvider>
    <Navbar/>
   <UserDetails/>
   </UserProvider>
  )
}