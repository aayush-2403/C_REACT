import { useState } from "react"

function App() {
  const [color, setColor] = useState("")

  return (
    <div className="w-full h-screen duration-200 "
    style={{backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-4 bg-yellow-50 px-3 py-3 rounded-2xl shadow-lg ">
          <button
          onClick={() => setColor("red")}
          className="  px-3 py-1 rounded-lg text-white shadow-lg "
          style={{backgroundColor: "red"}}
          >Red</button>
           <button
           onClick={() => setColor("grey")}
          className="  px-3 py-1 rounded-lg text-white shadow-lg "
          style={{backgroundColor: "grey"}}
          >Grey</button>
           <button
           onClick={() => setColor("yellow")}
          className="  px-3 py-1 rounded-lg text-white shadow-lg "
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
           <button
           onClick={() => setColor("blue")}
          className="  px-3 py-1 rounded-lg text-white shadow-lg "
          style={{backgroundColor: "blue"}}
          >Blue</button>
           <button
           onClick={() => setColor("purple")}
          className="  px-3 py-1 rounded-lg text-white shadow-lg "
          style={{backgroundColor: "purple"}}
          >Purple</button>
           <button
           onClick={() => setColor("green")}
          className="  px-3 py-1 rounded-lg text-white shadow-lg "
          style={{backgroundColor: "green"}}
          >Green</button>

        </div>
      </div>

    </div>
  )
}

export default App
