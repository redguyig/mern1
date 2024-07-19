import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Body from "./Components/Body"

function App() {  
  

  return (
    <>
     <div className="bg-amber-100 min-h-screen px-4 py-3 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-16 lg:py-10">
     <Header/>
     <Body/>
     <Footer/>
         </div>
    </>
  )
}

export default App
