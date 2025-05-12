
import { useCount } from "./component/useCount.jsx";
function App() {
  const  {count, increase, decrease, restart}= useCount();
  return (
  <div>
    {count}
      <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
      <button onClick={restart}>restart</button>
      </div>
  )
}
export default App;