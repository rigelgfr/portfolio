import { useState } from "react"
import { Button } from "./components/ui/button"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-row justify-center items-center w-full h-screen bg-[#252525] gap-2">
      <Button
        variant={"outline"}
        onClick={() => setCount((count) => count + 1)}>
        Click me
      </Button>

      <h1>Count: {count}</h1>
    </div>
  )
}

export default App
