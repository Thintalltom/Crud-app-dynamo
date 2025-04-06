import Form from "./components/Form"
import  './App.css'
import CookieConsent from "./components/CookieConsent"
function App() {
  return (
    <div className="w-[100%] mx-auto max-w-[1200px]">
   <Form firstname={""} lastname={""} userId={""} email={""}  />
   <CookieConsent />
    </div>
  )
}

export default App
