import gsap, { ScrollTrigger,SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <div>
        <h1 className="text-3xl text-indigo-300 flex-center h-[100vh]">
          Hello World
        </h1>
    </div>
  )
}

export default App