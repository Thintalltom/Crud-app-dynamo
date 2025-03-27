import Form from "./components/Form"
import  './App.css'
import CookieConsent from "./components/CookieConsent"
function App() {
  return (
    <>
   <Form firstname={""} lastname={""} userId={""} email={""}  />
   <CookieConsent />
    </>
  )
}

export default App
