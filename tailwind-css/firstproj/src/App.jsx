import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Body from "./Components/Body"

function App() {  
  

  return (
    <>
     <div className="bg-amber-100 min-h-screen px-4 py-3 flex flex-col gap-16">
     <Header/>
     <Footer/>
     <Body/>
     </div>
    </>
  )
}

export default App
